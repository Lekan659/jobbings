import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth, {type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt'
    },
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: 'Details',
    credentials: {
      email: {
        label: 'Email',
        type: 'email',
        placeholder: 'hello@example.com'
      },
    //   name: {
    //     label: 'Name',
    //     type: 'text',
    //     placeholder: 'hello@example.com'
    //   },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials) {
      // Add logic here to look up the user from the credentials supplied
      if (!credentials?.email || !credentials.password) {
        return null
      }
      console.log(credentials.email)

      const user = await prisma.user.findUnique({
        where: {
            email: credentials.email
        }
        // console.log(email)
      })

      if (!user) {
        // Any object returned will be saved in `user` property of the JWT
        return null
      } 

      const ispassword = await compare(credentials.password, user.password)
      
      if (!ispassword) {
        // Any object returned will be saved in `user` property of the JWT
        return null
      } 

      return{
        id: user.id + '',
        email: user.email,
        name: user.name,
        role: user.role
        
      }
    }
  })
],
callbacks: {
  session: ({session, token}) => {
    console.log('Session Callback', {session, token})
    return{
      ...session,
      id: token.id,
      role: token.role

    }

  },
  jwt: ({ token, user})  => {
    console.log('JWT Callback', {token, user})
    if (user) {
      const u = user as unknown as any
      return{
        ...token,
        id: u.id,
        role: u.role

      }
    }
    return token
  },
}
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }