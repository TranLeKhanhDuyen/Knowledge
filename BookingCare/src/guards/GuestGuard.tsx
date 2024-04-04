import Loading from '@components/Loading'
import { useAuthStore } from '@store/auth-store'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function GuestGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isInitialized } = useAuthStore()

  if (!isInitialized) return <Loading />

  if (isAuthenticated) return <Navigate to='/' />

  return <>{children}</>
}
