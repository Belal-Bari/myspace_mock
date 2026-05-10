'use client'

import { Session } from "inspector/promises";
import { SessionProvider } from "next-auth/react"

type Props = {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>
}