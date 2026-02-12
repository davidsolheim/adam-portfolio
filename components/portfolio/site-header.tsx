"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { portfolioContent } from "@/lib/content/portfolio"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-mark" aria-label="Adam Hinckley home">
          <span>Adam Hinckley</span>
          <small>Product-Driven Frontend Engineer</small>
        </Link>

        <nav aria-label="Primary navigation" className="primary-nav">
          {portfolioContent.nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link is-active" : "nav-link"}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link href="/contact" className="header-cta">
          Start
        </Link>
      </div>
    </header>
  )
}
