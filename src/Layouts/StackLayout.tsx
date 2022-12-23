// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Layout } from './Layout'
import styled from 'styled-components'

const StackLayoutElement = styled(Layout)`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'Vertical' ? 'column' : 'row'};
  gap: ${({ spacing }) => spacing + 'px'};
`

export function StackLayout ({ children, className, spacing, direction, ...props }: InferProps<typeof StackLayout.propTypes>) {
  return (
      <StackLayoutElement
          className={['Layouts__StackLayout', 'StackLayout', className].join(' ')}
          spacing={spacing}
          direction={direction}
          {...props}
      >
        {children}
      </StackLayoutElement>
  )
}

StackLayout.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf<string>(['Vertical', 'Horizontal']),
  spacing: PropTypes.number,
  children: PropTypes.any,
  props: PropTypes.any
}
