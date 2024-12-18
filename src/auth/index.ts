import { authConfig } from '@/configs/auth'
import NextAuth from 'next-auth'

const { handlers, signIn, signOut, auth } = NextAuth(authConfig)

export { auth, handlers, signIn, signOut }
