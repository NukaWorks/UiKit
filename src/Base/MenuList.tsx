import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { MenuItem } from './MenuItem'
import styled, { keyframes } from 'styled-components'

const fadeAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const MenuListElement = styled.div`
  z-index: 999;
  user-select: none;
  -webkit-user-select: none;
  flex-direction: column;
  color: black;
  font-family: "Outfit", sans-serif;
  font-size: 10pt;
  position: absolute;
  margin-top: 3px;
  display: block;
  animation: ${fadeAnim} 0.065s ease-in-out;
  width: fit-content;
  background-color: rgba(234, 234, 234, 0.4);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(101, 101, 101, 0.2);
  padding: 0.5em 0.2em;
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.065s ease-in-out;
`
// TODO Impl Theming

export function MenuList ({ className, children, ...props }: InferProps<typeof MenuList.propTypes>) {
  return (
    <MenuListElement
        className={['Base__MenuList', 'MenuList', className].join(' ')}
        {...props}
    >
      { children || <MenuItem />}
    </MenuListElement>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
