import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter' 
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };