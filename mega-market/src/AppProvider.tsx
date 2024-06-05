import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from '@services/models/userState'
import { Spinner } from '@components'

const queryClient = new QueryClient()

export const AppProviders: React.FC<{ children: ReactNode }> = ({
  children
}) => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={ <Spinner /> }>
      <UserProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </UserProvider>
    </Suspense>
  </QueryClientProvider>
)
