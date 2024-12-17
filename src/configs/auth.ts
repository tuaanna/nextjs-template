import { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const authConfigs: NextAuthConfig = {
  providers: [Google, GitHub],
  pages: {
    signIn: '/sign-in',
  },
}
