import Button from '@/components/Button/Button'
import { Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import AppLayout from './layout/AppLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <>
                <p>Interactive Frontend Camp</p>
                <Button>add</Button>
                <h1>hello</h1>
              </>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
