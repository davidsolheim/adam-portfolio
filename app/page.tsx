import Link from "next/link"
import { Reveal } from "@/components/portfolio/reveal"
import { ProjectCard } from "@/components/portfolio/project-card"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteFrame } from "@/components/portfolio/site-frame"
import { Timeline } from "@/components/portfolio/timeline"
import { portfolioContent } from "@/lib/content/portfolio"

export default function HomePage() {
  const featuredPreview = portfolioContent.featuredProjects.slice(0, 3)
  const timelinePreview = portfolioContent.timeline.slice(0, 2)

  return (
    <SiteFrame>
      <section className="hero-block">
        <Reveal>
          <p className="hero-eyebrow">{portfolioContent.hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero-title">{portfolioContent.hero.title}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero-subtitle">{portfolioContent.hero.subtitle}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              {portfolioContent.hero.ctaPrimary}
            </Link>
            <Link href="/work" className="button-ghost">
              {portfolioContent.hero.ctaSecondary}
            </Link>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="proof-grid" aria-label="Selected outcomes">
          {portfolioContent.proofStats.map((stat, index) => (
            <article key={stat.label} className={`proof-card proof-${index + 1}`}>
              <p>{stat.value}</p>
              <h3>{stat.label}</h3>
              <span>{stat.detail}</span>
            </article>
          ))}
        </section>
      </Reveal>

      <section className="section-block">
        <Reveal>
          <SectionHeading
            kicker="Selected Work"
            title="Shipping customer-critical interfaces with measurable business impact"
            description="From conversion workflows to marketplace UX, the work emphasizes clarity, speed, and repeatable engineering systems."
          />
        </Reveal>

        <div className="project-grid three-up">
          {featuredPreview.map((project, index) => (
            <Reveal key={project.name} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="section-action">
            <Link href="/work" className="button-ghost">
              View all project details
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal>
          <SectionHeading
            kicker="Career Snapshot"
            title="Operator mindset with product and engineering depth"
            description="A blend of startup execution, enterprise delivery, and leadership through ambiguity."
          />
        </Reveal>
        <Reveal delay={120}>
          <Timeline entries={timelinePreview} />
        </Reveal>
      </section>

      <Reveal>
        <section className="cta-band">
          <p>{portfolioContent.person.availability}</p>
          <h2>Building teams that care about outcomes, craft, and shipping velocity.</h2>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              Reach out
            </Link>
            <Link href="/about" className="button-ghost">
              Learn more about Adam
            </Link>
          </div>
        </section>
      </Reveal>
    </SiteFrame>
  )
}
