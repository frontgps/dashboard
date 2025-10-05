import { createContext } from 'react'

interface HeaderPositionContextType {
  isFixed: boolean
  toggleFixed: () => void
}

export const HeaderPositionContext = createContext<HeaderPositionContextType>({
  isFixed: false,
  toggleFixed: () => {},
})
