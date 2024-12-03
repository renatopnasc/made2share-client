import { SpotifyLogo } from '@phosphor-icons/react'
import { ChevronRight, Headphones, ListMusic, Radio } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Auth() {
  function handleLogin() {
    window.location.href = 'http://localhost:8080/api/v1/login'
  }

  return (
    <div className="min-h-screen bg-gray-900 antialiased">
      {/* Hero Section */}
      <main className="container mx-auto px-6 pb-16 pt-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Your Music, Your Way, <br />
            <span className="text-green-500">Everywhere</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Create, discover, and share amazing playlists. Connect with Spotify
            and take your music experience to the next level.
          </p>

          {/* Spotify Login Button */}
          <Button
            onClick={handleLogin}
            size="lg"
            className="mb-8 rounded-full bg-green-500 px-8 py-7 text-lg font-semibold text-white hover:bg-green-600"
          >
            <SpotifyLogo size={24} />
            Login with Spotify
            <ChevronRight className="ml-3 h-5 w-5" />
          </Button>

          <p className="text-sm text-gray-400">
            Free to use. No credit card required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border-0 bg-gray-800 bg-opacity-50">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-center text-white">
                Smart Playlists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-300">
                Create dynamic playlists based on your music preferences and
                listening history.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gray-800 bg-opacity-50">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                <Radio className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-center text-white">
                Cross-Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-300">
                Access your playlists anywhere, anytime. Seamlessly sync across
                all your devices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gray-800 bg-opacity-50">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                <ListMusic className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-center text-white">
                Social Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-300">
                Share your favorite playlists with friends and discover what
                others are listening to.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          <Card className="border-0 bg-transparent">
            <CardContent>
              <div className="mb-2 text-4xl font-bold text-white">1M+</div>
              <div className="text-gray-400">Active Users</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-transparent">
            <CardContent>
              <div className="mb-2 text-4xl font-bold text-white">5M+</div>
              <div className="text-gray-400">Playlists Created</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-transparent">
            <CardContent>
              <div className="mb-2 text-4xl font-bold text-white">50M+</div>
              <div className="text-gray-400">Songs Added</div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="text-center text-sm text-gray-400">
          © 2024 MusicHub. Not affiliated with Spotify. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
