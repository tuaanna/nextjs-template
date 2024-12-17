export const env = {
  ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL || 'http://localhost:3000',
  AUTH_SECRET: process.env.AUTH_SECRET || 'secret',
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
}
