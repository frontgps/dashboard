import Button from '@/components/Button/Button'
import { Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Login from '@/pages/Login'

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
