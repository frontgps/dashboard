import { AuthSuccessResponse } from '@/types/auth'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StoreState {
  //states
  token: string | null
  user: AuthSuccessResponse['record'] | null
  //actions
  setAuth: (data: AuthSuccessResponse) => void
  clearAuth: () => void
}

const initialState = {
  token: null,
  user: null,
}

export const useAuthStore = create<StoreState>()(
  persist(
    (set) => ({
      //state
      ...initialState,
      //action
      setAuth: (data) => set({ token: data.token, user: data.record }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
)
