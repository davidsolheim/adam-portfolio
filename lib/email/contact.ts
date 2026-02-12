import { Resend } from "resend"
import { getRequiredEnv } from "@/lib/env"

type ContactMessage = {
  name: string
  email: string
  company?: string
  role?: string
  message: string
}

function getResendClient() {
  const apiKey = getRequiredEnv("RESEND_API_KEY")

  return new Resend(apiKey)
}

export async function sendContactMessage(payload: ContactMessage) {
  const toEmail = getRequiredEnv("CONTACT_TO_EMAIL")
  const fromEmail = getRequiredEnv("EMAIL_FROM")

  const resend = getResendClient()

  const subject = `Portfolio inquiry from ${payload.name}`
  const companyLine = payload.company ? `Company: ${payload.company}` : ""
  const roleLine = payload.role ? `Role: ${payload.role}` : ""

  const text = [
    `From: ${payload.name}`,
    `Email: ${payload.email}`,
    companyLine,
    roleLine,
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n")

  const html = `
    <h2>Portfolio inquiry</h2>
    <p><strong>From:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ""}
    ${payload.role ? `<p><strong>Role:</strong> ${escapeHtml(payload.role)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject,
    replyTo: payload.email,
    text,
    html,
  })
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
