'use client'

import React, { createContext, useState, ReactNode } from 'react'
import { UserPublic } from '../types/User'

export interface UserContextType {
  user: UserPublic | null
  setUser: (user: UserPublic) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserPublic | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
