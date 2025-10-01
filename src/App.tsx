import Button from '@/components/Button/Button'
import { Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>Interactive Frontend Camp</p>
                <Button>add</Button>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </QueryClientProvider>
  )
}

export default App
