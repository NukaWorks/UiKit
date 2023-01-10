// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const LayoutElement = styled.div`
  display: block;
  overflow: ${({ scrollable }) => scrollable ? 'scroll' : 'hidden'};
`

export function Layout ({ children, className, scrollable, ...props }: InferProps<typeof Layout.propTypes>) {
  return (
    <LayoutElement
        className={['Layouts__Layout', 'Layout', className].join(' ')}
        scrollable={scrollable}
        {...props}
    >
      {children}
    </LayoutElement>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  scrollable: PropTypes.bool,
  props: PropTypes.any
}
