import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Github from "next-auth/providers/github";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
})

export { handler as GET, handler as POST }
