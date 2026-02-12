import type { Metadata } from "next"
import Link from "next/link"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteFrame } from "@/components/portfolio/site-frame"
import { portfolioContent } from "@/lib/content/portfolio"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and frontend engineering work by Adam Hinckley.",
}

export default function WorkPage() {
  return (
    <SiteFrame>
      <section className="section-block top-section">
        <Reveal>
          <SectionHeading
            kicker="Work"
            title="Products built for high-stakes decisions and everyday use"
            description="Featured engagements across ecommerce, startup products, and marketplace experiences."
          />
        </Reveal>

        <div className="project-grid two-up">
          {portfolioContent.featuredProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block">
        <Reveal>
          <SectionHeading
            kicker="Additional Projects"
            title="Ongoing product work and experiments"
            description="Hands-on side projects used to test product ideas, architecture choices, and interaction patterns."
          />
        </Reveal>

        <div className="secondary-grid">
          {portfolioContent.secondaryProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <article className="secondary-card">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <Link href={project.href} target="_blank" rel="noreferrer">
                  Visit project
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="cta-band compact">
          <p>Need a frontend lead who can execute quickly and communicate clearly?</p>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              Contact Adam
            </Link>
          </div>
        </section>
      </Reveal>
    </SiteFrame>
  )
}
