import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteFrame } from "@/components/portfolio/site-frame"
import { Timeline } from "@/components/portfolio/timeline"
import { portfolioContent } from "@/lib/content/portfolio"

export const metadata: Metadata = {
  title: "About",
  description: "Background, principles, and engineering approach of Adam Hinckley.",
}

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="section-block top-section">
        <Reveal>
          <SectionHeading
            kicker="About"
            title="Frontend engineer with product instincts and operator discipline"
            description={`${portfolioContent.person.name} is based in ${portfolioContent.person.location} and focused on remote full-time roles where product impact is measurable.`}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="about-copy">
            <p>
              Adam brings cross-domain experience from growth-oriented software, operational leadership, and customer-facing businesses. That range translates into thoughtful decisions at both the interaction and architecture levels.
            </p>
            <p>
              He is strongest in React and Next.js systems where reliability, iteration speed, and user trust are critical. He builds software that teams can maintain without sacrificing visual quality.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal>
          <SectionHeading
            kicker="Operating Principles"
            title="How Adam works"
          />
        </Reveal>
        <div className="principles-grid">
          {portfolioContent.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 90}>
              <article className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block">
        <Reveal>
          <SectionHeading
            kicker="Timeline"
            title="Career history"
          />
        </Reveal>
        <Reveal delay={110}>
          <Timeline entries={portfolioContent.timeline} />
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal>
          <SectionHeading kicker="Capabilities" title="Technical and product strengths" />
        </Reveal>
        <div className="skills-grid">
          {portfolioContent.skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <article className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="cta-band compact">
          <p>Interested in working together?</p>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              Start a conversation
            </Link>
          </div>
        </section>
      </Reveal>
    </SiteFrame>
  )
}
