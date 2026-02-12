import Link from "next/link"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { SiteHeader } from "@/components/portfolio/site-header"
import { portfolioContent } from "@/lib/content/portfolio"

type SiteFrameProps = {
  children: React.ReactNode
}

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="site-root">
      <ScrollProgress />
      <div className="background-mesh" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <SiteHeader />
      <main className="container page-main">{children}</main>
      <footer className="container site-footer">
        <p>
          Built by {portfolioContent.person.name}. Open to full-time remote opportunities in
          product engineering.
        </p>
        <div>
          {portfolioContent.social.map((link) => (
            <Link key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}
