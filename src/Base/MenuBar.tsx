import React, { createContext, ReactNode } from 'react'
import styled from 'styled-components'

export interface MenuBarProps {
  className?: string
  children?: ReactNode
}

const MenuBarElement = styled.div`
    display: flex;
    gap: 1px;
`

export const HoverContext = createContext('false')

export function MenuBar ({
  children,
  className,
  ...props
}: MenuBarProps) {
  return (
    <HoverContext.Provider value={'false'}>
      <MenuBarElement
        className={['Base__MenuBar', 'MenuBar', className].join(' ')}
        {...props}
      >
        {children}
      </MenuBarElement>
    </HoverContext.Provider>
  )
}
