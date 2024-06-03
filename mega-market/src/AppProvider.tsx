import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from '@services/models/userState'

const queryClient = new QueryClient()

export const AppProviders: React.FC<{ children: ReactNode }> = ({
  children
}) => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
      <UserProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </UserProvider>
    </Suspense>
  </QueryClientProvider>
)
