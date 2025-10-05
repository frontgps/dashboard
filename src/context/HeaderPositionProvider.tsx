import { ReactNode, useState } from 'react'
import { HeaderPositionContext } from './HeaderPositionContext'

export const HeaderPositionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isFixed, setIsFixed] = useState<boolean>(false)

  const toggleFixed = () => setIsFixed((prev) => !prev)

  return (
    <HeaderPositionContext.Provider value={{ isFixed, toggleFixed }}>
      {children}
    </HeaderPositionContext.Provider>
  )
}
