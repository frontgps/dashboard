import { HeaderPositionContext } from '@/context/HeaderPositionContext'
import { useContext } from 'react'

export const useHeaderPosition = () => useContext(HeaderPositionContext)
