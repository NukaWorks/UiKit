import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Test.scss'
import styled from 'styled-components'

const Div = styled.div`
  color: deeppink;
`

export function Test ({ children, className, ...props }: InferProps<typeof Test.propTypes>) {
  return (
    <Div
        className={['CATEGORY__test', className].join(' ')}
        {...props}
    >
        Hello World !
    </Div>
  )
}

Test.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
