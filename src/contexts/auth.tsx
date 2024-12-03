import { createContext, ReactNode, useEffect, useState } from 'react'

import { getMe } from '@/api/me'

interface User {
  country: string
  display_name: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  href: string
  id: string
  images: Array<{
    url: string
    height: number | null
    width: number | null
  }>
  product: string
  type: string
  uri: string
}

type AuthContextProps = {
  authenticated: boolean
  user: User | null
}

export const AuthContext = createContext({} as AuthContextProps)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUserData() {
      const data = await getMe()

      if (data) {
        setAuthenticated(true)
        setUser(data)
      }
    }

    fetchUserData()
  }, [authenticated])
  return (
    <AuthContext.Provider value={{ authenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
