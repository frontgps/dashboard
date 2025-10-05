import { useAuthStore } from '@/zustand/authStore'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}
export default function ProtectedRoutes({ children }: Props) {
  const isAuth = useAuthStore((state) => state.isAuth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) navigate('/')
  }, [isAuth])
  return isAuth ? children : null
}
