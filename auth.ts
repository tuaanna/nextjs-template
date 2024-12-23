import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
})

export { auth, handlers, signIn, signOut }
