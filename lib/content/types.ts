export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type SocialLink = {
  label: string
  href: string
}

export type ProofStat = {
  value: string
  label: string
  detail: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type FeaturedProject = {
  name: string
  category: "Professional" | "Startup" | "Product" | "Personal"
  period: string
  summary: string
  impact: string
  stack: string[]
  links: ProjectLink[]
}

export type SecondaryProject = {
  name: string
  summary: string
  href: string
}

export type TimelineEntry = {
  role: string
  company: string
  location: string
  start: string
  end: string
  summary: string
  highlights: string[]
}

export type Principle = {
  title: string
  detail: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type PortfolioContent = {
  person: {
    name: string
    role: string
    location: string
    availability: string
    email: string
    siteTitle: string
    siteDescription: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  nav: NavItem[]
  social: SocialLink[]
  proofStats: ProofStat[]
  featuredProjects: FeaturedProject[]
  secondaryProjects: SecondaryProject[]
  principles: Principle[]
  skills: SkillGroup[]
  timeline: TimelineEntry[]
}
