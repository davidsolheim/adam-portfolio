"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight <= 0) {
        setProgress(0)
        return
      }

      setProgress(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)))
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <div className="progress-track" aria-hidden>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
