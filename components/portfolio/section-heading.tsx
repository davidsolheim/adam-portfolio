type SectionHeadingProps = {
  kicker?: string
  title: string
  description?: string
}

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
