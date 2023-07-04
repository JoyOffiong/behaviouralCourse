import { getAuthUser } from "@/core/utils/auth";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import apiClient from "@/core/services/api-client";
import { User } from "@/core/models/user.model";
import authService from "@/core/services/auth.servce";

export const authOptions = (req: any, res: any) => {
  return {
    providers: [
      CredentialsProvider({
        type: "credentials",
        credentials: {},

        async authorize(credentials, req) {
          const { email, password } = credentials as { email: string, password: string }

          const resData = await authService.login({
            email: email,
            password: password,
          });

          const { ok, data, problem }: any = resData;

          if (ok && data.access_token) {
            apiClient.addAsyncRequestTransform(async (request: any) => {
              request.headers['Authorization'] = `Bearer ${data.access_token}`;
              // request.headers['Set-Cookie'] = [`cookie_name=${data.access_token}`];
            });

            // res.setHeader('Set-Cookie', [`cookie_name=${data.access_token}`])


            const user: User = await getAuthUser();
            user.accessToken = data.access_token
            if (user) return user

          } else if (problem === "CLIENT_ERROR") {
            throw new Error('Invalid login credentials')
          } else throw new Error('Unexpected error, Please try again!')

          return null
        }
      })
    ],
    session: {
      strategy: 'jwt'
    },
    callbacks: {
      async session({ session, user, token }: any) {
        session.user = token as any
        return session
      },
      async jwt({ token, user, account, profile }: any) {
        // res.setHeader('Set-Cookie', token)
        return { ...token, ...user }
      }
    },
    pages: {
      signIn: "/",
      signOut: "/createaccount"
    }
  } as NextAuthOptions
}

export default (req: any, res: any) => {
  //@ts-ignore
  return NextAuth(req, res, authOptions(req, res))
}