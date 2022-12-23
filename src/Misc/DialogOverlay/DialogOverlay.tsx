import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  color: deeppink;
`

export function DialogOverlay ({ children, className, ...props }: InferProps<typeof DialogOverlay.propTypes>) {
  return (
    <Div
        className={['Misc__DialogOverlay', className].join(' ')}
        {...props}
    >
        Hello World !
    </Div>
  )
}

DialogOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
