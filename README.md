# Adam Hinckley Portfolio

A cinematic editorial portfolio site built with Next.js 16 for Adam Hinckley.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 (used for base tooling) + custom CSS design system
- Resend + Next.js API Route for contact form delivery

## Routes

- `/` home
- `/work` selected and secondary projects
- `/about` background, principles, timeline, and skills
- `/contact` direct links and inquiry form
- `POST /api/contact` contact submission endpoint

## Local Setup

1. Install dependencies:

```bash
bun install
```

2. Create environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="Adam Hinckley"
NEXT_PUBLIC_SITE_URL="https://adamhinckley.com"
RESEND_API_KEY="your_resend_api_key"
EMAIL_FROM="portfolio@yourdomain.com"
CONTACT_TO_EMAIL="adamhinckley@mac.com"
```

3. Run development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
bun run dev
bun run lint
bun run build
bun run start
```

`bun run lint` runs `next build` as the quality gate.

## Contact API Contract

`POST /api/contact`

Request body:

```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "role": "string (optional)",
  "message": "string (required)",
  "website": "string (optional honeypot, must be empty)"
}
```

Responses:

- Success: `{ "ok": true }`
- Validation error: `{ "ok": false, "error": "validation_error" }`
- Rate limit: `{ "ok": false, "error": "rate_limited" }`
- Send failure: `{ "ok": false, "error": "send_failed" }`

## Notes

- Contact form rate limiting is in-memory and best-effort.
- The site uses concrete timeline dates, including ClickBank (May 2024 to January 2026).
