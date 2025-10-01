import Button from '@/components/Button/Button'
import { Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'

function App() {
  return (
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
  )
}

export default App
