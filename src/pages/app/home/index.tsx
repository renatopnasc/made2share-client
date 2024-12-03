import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { createPlaylist } from '@/api/create-playlist'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const playlistFormSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  artists: z.array(z.string()),
})

type PlaylistFormData = z.infer<typeof playlistFormSchema>

export function Home() {
  const { register, handleSubmit, setValue } = useForm<PlaylistFormData>({
    resolver: zodResolver(playlistFormSchema),
    defaultValues: {
      name: '',
      description: '',
      artists: [],
    },
  })

  const [artistName, setArtistName] = useState('') // Estado para o input do artista
  const [artists, setArtists] = useState<string[]>([]) // Estado para a lista de artistas

  // Função para adicionar artista
  const addArtist = () => {
    if (artistName && !artists.includes(artistName)) {
      const updatedArtists = [...artists, artistName]
      setArtists(updatedArtists)
      setValue('artists', updatedArtists) // Atualiza o valor dos artistas no formulário
      setArtistName('') // Limpa o input do artista
    }
  }

  // Função para remover artista
  const removeArtist = (artistToRemove: string) => {
    const updatedArtists = artists.filter((artist) => artist !== artistToRemove)
    setArtists(updatedArtists)
    setValue('artists', updatedArtists) // Atualiza o valor dos artistas no formulário
  }

  function handleCreatePlaylist(data: PlaylistFormData) {
    createPlaylist(data)
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="mx-auto w-full max-w-7xl">
        <form onSubmit={handleSubmit(handleCreatePlaylist)}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Label className="font-medium text-muted">Nome da playlist</Label>
              <Input
                placeholder="Ex: 90s vibe"
                className="border-gray-700 bg-gray-800 text-muted"
                {...register('name')}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label className="font-medium text-muted">Descrição</Label>
              <Textarea
                placeholder="Descrição da playlist"
                className="h-44 resize-none border-gray-700 bg-gray-800"
                {...register('description')}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label className="font-medium text-muted">Artistas</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Digite o nome do artista"
                  className="border-gray-700 bg-gray-800 text-muted"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={addArtist}
                  className="bg-blue-600"
                >
                  Adicionar
                </Button>
              </div>

              {/* Lista de artistas */}
              <div className="mt-2">
                {artists.map((artist, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-300">{artist}</span>
                    <Button
                      type="button"
                      onClick={() => removeArtist(artist)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remover
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="mt-6 bg-green-600">
            Criar playlist
          </Button>
        </form>
      </div>
    </div>
  )
}
