import { authConfigs } from '@/configs/auth'
import NextAuth from 'next-auth'

const { handlers, signIn, signOut, auth } = NextAuth(authConfigs)

export { auth, handlers, signIn, signOut }
