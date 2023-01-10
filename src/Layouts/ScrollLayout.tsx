// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Layout } from './Layout'
import PropTypes, { InferProps } from 'prop-types'

const ScrollLayoutElement = styled(Layout)`
  display: block;
  overflow: scroll;
`
export default function ScrollLayout ({ children, className, ...props }): InferProps<typeof ScrollLayout.propTypes> {
  return (
    <ScrollLayoutElement
      className={['Layouts__ScrollLayout', 'ScrollLayout', className].join(' ')}
    >
      {children}
    </ScrollLayoutElement>
  )
}

ScrollLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
