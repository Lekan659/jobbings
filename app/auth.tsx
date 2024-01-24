'use client'

import { Button } from '@/components/ui/button'
import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>
}