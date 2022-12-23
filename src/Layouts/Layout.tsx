import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const LayoutElement = styled.div`
  display: block;
`

export function Layout ({ children, className, ...props }: InferProps<typeof Layout.propTypes>) {
  return (
    <LayoutElement
        className={['Layouts__Layout', 'Layout', className].join(' ')}
        {...props}
    >
      {children}
    </LayoutElement>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
