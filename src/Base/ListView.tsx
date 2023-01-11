import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { ScrollLayout } from '../Layouts/ScrollLayout'

const ListElement = styled(ScrollLayout)`
  display: block;
  
  & div:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export function ListView ({ children, className, ...props }: InferProps<typeof ListView.propTypes>) {
  return (
    <ListElement
        className={['Base__ListView', 'ListView', className].join(' ')}
        {...props}
    >
      {children}
    </ListElement>
  )
}

ListView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
