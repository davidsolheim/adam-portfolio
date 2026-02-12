import Link from "next/link"
import type { FeaturedProject } from "@/lib/content/types"

type ProjectCardProps = {
  project: FeaturedProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
      </div>

      <div className="project-card-bottom">
        <p className="project-impact">{project.impact}</p>
        <ul className="stack-list" aria-label={`${project.name} technology stack`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.links.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
