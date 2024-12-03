import { api } from '@/lib/axios'

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

export async function getMe(): Promise<User | null> {
  try {
    const response = await api.get<{ user: User }>('me', {
      withCredentials: true,
    })

    return response.data.user
  } catch {
    return null
  }
}
