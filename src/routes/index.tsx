import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthContext } from '@/contexts/auth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { authenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
