import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export function DialogOverlay ({ children, active, className, ...props }: InferProps<typeof DialogOverlay.propTypes>) {
  return (
    <Div
        className={['Misc__DialogOverlay', 'DialogOverlay', className].join(' ')}
        {...props}
    >
      { children }
    </Div>
  )
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
