// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { useDetectClickOutside } from 'react-detect-click-outside'

const dialogAnim = keyframes`
  to {
    opacity: 0;
  }
  
  from {
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

export function DialogOverlay ({
  children,
  active,
  className,
  ...props
}: InferProps<typeof DialogOverlay.propTypes>) {
  const [displayDialog, setDisplayDialog] = React.useState(active)
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setDisplayDialog(false)
    }
  })

  if (!displayDialog) {
    return null
  } else {
    return (
      <DialogElement
        active={displayDialog}
        className={['Misc__DialogOverlay', 'DialogOverlay', className].join(' ')}
        {...props}
      >
        <DialogContentElement ref={ref}>
          {children}
        </DialogContentElement>
      </DialogElement>
    )
  }
}

export function closeDialogOverlay () {
  document.getElementById('root').click()
}

DialogOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  active: PropTypes.bool,
  props: PropTypes.any
}

DialogOverlay.defaultProps = {
  active: false
}
