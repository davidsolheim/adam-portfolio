import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/portfolio/contact-form"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteFrame } from "@/components/portfolio/site-frame"
import { portfolioContent } from "@/lib/content/portfolio"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adam Hinckley for full-time frontend engineering opportunities.",
}

export default function ContactPage() {
  return (
    <SiteFrame>
      <section className="section-block top-section">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let’s discuss your role, team, and product goals"
            description="Share the opportunity details and Adam will respond by email."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-layout">
            <div className="contact-panel">
              <h3>Direct channels</h3>
              <p>
                Prefer direct outreach? Use email or LinkedIn.
              </p>
              <ul>
                <li>
                  <span>Email</span>
                  <Link href={`mailto:${portfolioContent.person.email}`}>{portfolioContent.person.email}</Link>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <Link href="https://www.linkedin.com/in/adamhinckley" target="_blank" rel="noreferrer">
                    linkedin.com/in/adamhinckley
                  </Link>
                </li>
                <li>
                  <span>GitHub</span>
                  <Link href="https://github.com/adamhinckley" target="_blank" rel="noreferrer">
                    github.com/adamhinckley
                  </Link>
                </li>
              </ul>
            </div>

            <div className="form-panel">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </SiteFrame>
  )
}
