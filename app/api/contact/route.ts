import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendContactMessage } from "@/lib/email/contact"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 4

const rateLimitMap = new Map<string, { count: number; expiresAt: number }>()

const contactSchema = z
  .object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(200),
    company: z.string().max(150).optional(),
    role: z.string().max(150).optional(),
    message: z.string().min(10).max(3000),
    website: z.string().max(300).optional(),
  })
  .transform((data) => ({
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company?.trim() ?? "",
    role: data.role?.trim() ?? "",
    message: data.message.trim(),
    website: data.website?.trim() ?? "",
  }))

function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip") || "unknown"
}

function cleanRateLimitMap(now: number) {
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.expiresAt <= now) {
      rateLimitMap.delete(key)
    }
  }
}

function isRateLimited(clientId: string) {
  const now = Date.now()
  cleanRateLimitMap(now)

  const current = rateLimitMap.get(clientId)

  if (!current) {
    rateLimitMap.set(clientId, {
      count: 1,
      expiresAt: now + WINDOW_MS,
    })
    return false
  }

  if (current.count >= MAX_REQUESTS) {
    return true
  }

  current.count += 1
  rateLimitMap.set(clientId, current)
  return false
}

export async function POST(request: NextRequest) {
  let rawBody: unknown

  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "validation_error" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(rawBody)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation_error" }, { status: 400 })
  }

  if (parsed.data.website.length > 0) {
    return NextResponse.json({ ok: false, error: "validation_error" }, { status: 400 })
  }

  const clientId = getClientIdentifier(request)

  if (isRateLimited(clientId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  try {
    await sendContactMessage(parsed.data)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact send failed", error)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 })
  }
}
