import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'

const Providers = ({ children }) => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default Providers