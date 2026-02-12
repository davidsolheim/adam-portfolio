import type { TimelineEntry } from "@/lib/content/types"

type TimelineProps = {
  entries: TimelineEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="timeline-list">
      {entries.map((entry) => (
        <article key={`${entry.company}-${entry.start}`} className="timeline-entry">
          <div className="timeline-marker" aria-hidden />
          <div className="timeline-content">
            <div className="timeline-header">
              <p>{entry.start} to {entry.end}</p>
              <span>{entry.location}</span>
            </div>
            <h3>{entry.role}</h3>
            <h4>{entry.company}</h4>
            <p>{entry.summary}</p>
            <ul>
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
