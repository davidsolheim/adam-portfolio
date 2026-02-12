import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Bebas_Neue, Cormorant_Garamond, Manrope } from "next/font/google"
import { portfolioContent } from "@/lib/content/portfolio"
import { getOptionalEnv } from "@/lib/env"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial",
})

const siteUrl = getOptionalEnv("NEXT_PUBLIC_SITE_URL") || "https://adamhinckley.com"
const siteName = getOptionalEnv("NEXT_PUBLIC_SITE_NAME") || portfolioContent.person.siteTitle
const description = portfolioContent.person.siteDescription

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Frontend Engineer`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Adam Hinckley",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Frontend Engineer`,
    description,
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Adam Hinckley portfolio mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Frontend Engineer`,
    description,
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090b11" },
    { media: "(prefers-color-scheme: light)", color: "#f3ece2" },
  ],
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${bebasNeue.variable} ${cormorant.variable} app-body`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
