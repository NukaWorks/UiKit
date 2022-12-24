// @ts-nocheck

import React from 'react'
import PropTypes, { bool, InferProps } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const dialogAnim = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const DialogElement = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${dialogAnim} 0.2s 0.2s ease-in-out forwards;
`

const DialogContentElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 1em;
`

export const DialogOverlayContext = React.createContext()

export function DialogOverlay ({
  children,
  ref,
  displayed,
  className,
  ...props
}: InferProps<typeof DialogOverlay.propTypes>) {
  return (
    {
      displayed: bool && (
      <DialogElement
        className={['Misc__DialogOverlay', 'DialogOverlay', className].join(' ')}
        {...props}
      >
        <DialogContentElement ref={ref}>
          {children}
        </DialogContentElement>
      </DialogElement>
      )
    }
  )
}

export function closeDialogOverlay () {
  document.getElementById('root').click()
}

DialogOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  displayed: PropTypes.bool,
  props: PropTypes.any
}
