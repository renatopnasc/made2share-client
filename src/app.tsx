import { AuthContextProvider } from './contexts/auth'
import { Routes } from './routes'

export function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}
