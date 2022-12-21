import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const blinkAnim = keyframes`
  to {
    background-color: initial;
  }

  from {
    background-color: transparent;
    color: black
  }
`

const MenuItemElement = styled.div`
  user-select: none;
  -webkit-user-select: none;
  font-family: "Outfit", sans-serif;
  padding: 0.2em 0.25em;
  border-radius: 5px;
  white-space: nowrap;

  :hover {
    background-color: #1EA7FD;
    color: white;
  }

  :active {
    background-color: #1c9ae8;
    animation: ${blinkAnim} 0.030s;
  }
`

export function MenuItem ({ children, className, onClick, ...props }: InferProps<typeof MenuItem.propTypes>) {
  return (
    <MenuItemElement
        className={['Base__MenuItem', className].join(' ')}
        onClick={() => onClick ? onClick() : undefined}
        {...props}
    >
      { children || 'MenuItem empty'}
    </MenuItemElement>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
  onClick: PropTypes.func
}
