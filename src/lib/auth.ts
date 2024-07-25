import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "seuemail@email.com" },
                password: { label: "Password", type: "password" },
                username: { label: "Nome", type: "text", placeholder: "Username" }
            },
            async authorize(credentials, req) : Promise<any>{
                const user = { email: "gabriel@email.com", password: "123456", name: "Gabriel Maia" }
                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === "development",
}