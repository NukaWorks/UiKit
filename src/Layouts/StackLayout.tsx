import React, { FunctionComponent, ReactNode } from 'react'
import { Layout } from './Layout'
import styled from 'styled-components'

const StackLayoutElement = styled(Layout)<{ direction: string; spacing: number }>`
    display: flex;
    flex-direction: ${({ direction }) => direction === 'Vertical' ? 'column' : 'row'};
    gap: ${({ spacing }) => `${spacing}px`};
`

interface StackLayoutProps {
  children: ReactNode;
  className?: string;
  spacing: number;
  direction: 'Vertical' | 'Horizontal';
}

export const StackLayout: FunctionComponent<StackLayoutProps> = ({
  children,
  className,
  spacing,
  direction,
  ...props
}) => {
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
