import { api } from '@/lib/axios'

type PlaylistFormData = {
  name: string
  description: string | null
  artists: string[]
}

export async function createPlaylist(data: PlaylistFormData) {
  await api.post(
    '/playlists',
    {
      name: data.name,
      description: data.description || 'Created by made2share',
      artists: data.artists,
    },
    {
      withCredentials: true,
    },
  )
}
