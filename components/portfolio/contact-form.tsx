"use client"

import { FormEvent, useState } from "react"

type ContactPayload = {
  name: string
  email: string
  company: string
  role: string
  message: string
  website: string
}

const initialForm: ContactPayload = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
  website: "",
}

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        setStatus("error")

        if (data.error === "rate_limited") {
          setErrorMessage("You have reached the temporary send limit. Please try again shortly.")
          return
        }

        if (data.error === "validation_error") {
          setErrorMessage("Please check your details and try again.")
          return
        }

        setErrorMessage("Message could not be sent. Please email directly instead.")
        return
      }

      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
      setErrorMessage("Message could not be sent. Please email directly instead.")
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row two-col">
        <label>
          Full name
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
        </label>
      </div>

      <div className="form-row two-col">
        <label>
          Company
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          />
        </label>

        <label>
          Role / opportunity
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
          />
        </label>
      </div>

      <label className="sr-only-field" aria-hidden>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        />
      </label>

      <div className="contact-form-footer">
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" ? <p className="form-status success">Message sent. Adam will reply soon.</p> : null}
        {status === "error" ? <p className="form-status error">{errorMessage}</p> : null}
      </div>
    </form>
  )
}
