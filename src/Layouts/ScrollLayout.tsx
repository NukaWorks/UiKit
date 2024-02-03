import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { Layout } from './Layout'

const ScrollLayoutElement = styled(Layout)`
    display: block;
    overflow: scroll;
`

interface ScrollLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ScrollLayout: FunctionComponent<ScrollLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ScrollLayoutElement
      className={['Layouts__ScrollLayout', 'ScrollLayout', className].join(' ')}
      {...props}
    >
      {children}
    </ScrollLayoutElement>
  )
}
