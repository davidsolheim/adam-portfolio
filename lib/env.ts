export type AppEnv = {
  CONTACT_TO_EMAIL: string
  EMAIL_FROM: string
  NEXT_PUBLIC_SITE_NAME: string
  NEXT_PUBLIC_SITE_URL: string
  RESEND_API_KEY: string
}

export function getOptionalEnv<K extends keyof AppEnv>(key: K): string | undefined {
  return process.env[key]
}

export function getRequiredEnv<K extends keyof AppEnv>(key: K): string {
  const value = process.env[key]

  if (!value) {
    throw new Error(`${key} is not configured`)
  }

  return value
}
