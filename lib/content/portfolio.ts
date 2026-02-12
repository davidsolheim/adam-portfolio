import type { PortfolioContent } from "@/lib/content/types"

export const portfolioContent: PortfolioContent = {
  person: {
    name: "Adam Hinckley",
    role: "Senior Frontend Engineer",
    location: "Alabama, United States",
    availability: "Open to remote full-time senior and staff frontend roles.",
    email: "adamhinckley@mac.com",
    siteTitle: "Adam Hinckley",
    siteDescription:
      "Senior frontend engineer building product systems that move conversion, velocity, and reliability.",
  },
  hero: {
    eyebrow: "Previously at ClickBank",
    title: "I build revenue-critical product experiences that teams can ship and scale.",
    subtitle:
      "Frontend engineer with six-plus years in React, Next.js, and TypeScript. I turn complex flows into fast, measurable customer outcomes.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "See selected work",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/adamhinckley" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adamhinckley" },
    { label: "Email", href: "mailto:adamhinckley@mac.com" },
  ],
  proofStats: [
    {
      value: "8%",
      label: "Conversion lift",
      detail: "ClickBank checkout redesign and customization tools",
    },
    {
      value: "70%",
      label: "More customized order forms",
      detail: "Launched high-flexibility WYSIWYG order flow tooling",
    },
    {
      value: "50%",
      label: "Faster accounting workflows",
      detail: "Modernized micro-frontend operations with SSO",
    },
    {
      value: "12%",
      label: "Fraud reduction",
      detail: "Built interfaces for AI-assisted compliance and risk review",
    },
  ],
  featuredProjects: [
    {
      name: "ClickBank Checkout Platform",
      category: "Professional",
      period: "2024 to 2026",
      summary:
        "Rebuilt and extended affiliate checkout experiences for high-volume digital products, including a configurable order-form editor used across campaigns.",
      impact:
        "Drove a measurable 8% conversion increase while improving campaign customization adoption by 70%.",
      stack: ["Next.js", "TypeScript", "React", "Material UI", "Storybook"],
      links: [
        {
          label: "Example order flow",
          href: "https://orders.clickbank.net/",
        },
      ],
    },
    {
      name: "Bowes",
      category: "Startup",
      period: "2025",
      summary:
        "Shaped a product-ready frontend foundation for a fast-moving startup, from interaction design to reusable UI patterns and release-friendly architecture.",
      impact:
        "Reduced delivery friction by standardizing component behavior and page-level composition patterns for new features.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      links: [
        {
          label: "Project page",
          href: "https://bowes.io",
        },
      ],
    },
    {
      name: "NamePros Marketplace",
      category: "Product",
      period: "2025",
      summary:
        "Built key marketplace UX for discovery and transaction confidence, with attention to speed, clarity, and trust at each decision point.",
      impact:
        "Improved browse-to-action flow with clearer state handling, pricing communication, and stronger mobile ergonomics.",
      stack: ["React", "TypeScript", "TanStack Query", "CSS"],
      links: [
        {
          label: "Visit NamePros",
          href: "https://www.namepros.com",
        },
      ],
    },
    {
      name: "flash.camp",
      category: "Startup",
      period: "2025 to 2026",
      summary:
        "Developed polished onboarding and content-management interfaces for a creator-focused web product with real-world production constraints.",
      impact:
        "Accelerated product iteration by combining pragmatic component reuse with clear, low-friction authoring flows.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      links: [
        {
          label: "Visit flash.camp",
          href: "https://flash.camp",
        },
      ],
    },
  ],
  secondaryProjects: [
    {
      name: "Ward Program",
      summary: "Production church-program platform with QR access and active users since July 2024.",
      href: "https://www.wardprogram.com/",
    },
    {
      name: "Personal Articles in MDX",
      summary: "Technical writing system with interactive React components and structured content pipelines.",
      href: "https://adamhinckley.com/articles",
    },
    {
      name: "Stock Viewer",
      summary: "Frontend plus backend split architecture for stock discovery and analysis workflows.",
      href: "https://stock-viewer-gules.vercel.app/",
    },
    {
      name: "Design System",
      summary: "Open design system work in progress with Storybook-driven component documentation.",
      href: "https://design-system-hazel-mu.vercel.app/?path=/docs/design-system--docs",
    },
  ],
  principles: [
    {
      title: "Outcome over ornament",
      detail:
        "I design interfaces around measurable behavior change: conversion, completion speed, and error reduction.",
    },
    {
      title: "Systems before screens",
      detail:
        "I build repeatable UI and decision frameworks so teams ship faster after the first release, not slower.",
    },
    {
      title: "Calm under complexity",
      detail:
        "I work well in messy product environments where constraints shift and teams need clear technical direction.",
    },
  ],
  skills: [
    {
      title: "Frontend Architecture",
      items: [
        "React and Next.js",
        "TypeScript",
        "State and data orchestration",
        "Micro-frontend migration",
      ],
    },
    {
      title: "Product Engineering",
      items: [
        "Experiment-ready UI",
        "Conversion-focused flow design",
        "A11y and interaction quality",
        "Design-system thinking",
      ],
    },
    {
      title: "Delivery",
      items: [
        "Code reviews and technical leadership",
        "Cross-functional product collaboration",
        "Testing with Jest and React Testing Library",
        "CI/CD and release hygiene",
      ],
    },
  ],
  timeline: [
    {
      role: "Senior Frontend Developer",
      company: "ClickBank",
      location: "Remote",
      start: "May 2024",
      end: "January 2026",
      summary:
        "Owned high-impact product surfaces across checkout, compliance, and operational tooling in a performance-sensitive ecommerce environment.",
      highlights: [
        "Drove a 70% increase in customized order forms with a modular editor.",
        "Contributed to an 8% conversion gain by improving checkout UX and responsiveness.",
        "Helped modernize internal accounting and service tools, cutting process time by 50%.",
      ],
    },
    {
      role: "Owner / Operator",
      company: "Hinckley Financial",
      location: "Boise, Idaho",
      start: "January 2008",
      end: "December 2019",
      summary:
        "Led a distributed sales and operations organization while building practical internal software to support thousands of agents.",
      highlights: [
        "Scaled organization capacity to serve more than 15,000 clients.",
        "Directed and coached a team of 25 agents through nationwide growth.",
      ],
    },
    {
      role: "Sales Manager",
      company: "A&E Autoglass",
      location: "Mesa, Arizona",
      start: "June 2005",
      end: "January 2008",
      summary:
        "Built partnerships, trained sales teams, and improved field execution in a high-velocity local services business.",
      highlights: [
        "Delivered 60% year-over-year sales growth.",
      ],
    },
  ],
}
