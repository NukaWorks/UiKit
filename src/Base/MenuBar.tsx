import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const MenuBarElement = styled.div`
  display: flex;
  gap: 1px;
`

export const HoverContext = React.createContext('false')

export function MenuBar ({ children, className, ...props }: InferProps<typeof MenuBar.propTypes>) {
  return (
      <HoverContext.Provider value={'false'}>
        <MenuBarElement
            className={['Base__MenuBar', className].join(' ')}
            {...props}
        >
          { children }
        </MenuBarElement>
      </HoverContext.Provider>
  )
}

MenuBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
