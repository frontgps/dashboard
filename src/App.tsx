import Button from '@/components/Button/Button'
import { Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Login from '@/pages/Login'
import AppLayout from './layout/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './pages/ProtectedRoutes'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Routes>
          <Route element={<AppLayout />}>
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
          </Route>
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </>
    </QueryClientProvider>
  )
}

export default App
