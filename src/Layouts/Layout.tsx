import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const LayoutElement = styled.div<{
  overflow?: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}>`
    display: block;
    overflow: ${({ overflow }) => overflow};
    width: ${({ width }) => width ? width + 'px' : 'auto'};
    height: ${({ height }) => height ? height + 'px' : 'auto'};
    min-width: ${({ minWidth }) => minWidth ? minWidth + 'px' : 'auto'};
    min-height: ${({ minHeight }) => minHeight ? minHeight + 'px' : 'auto'};
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth + 'px' : 'auto'};
    max-height: ${({ maxHeight }) => maxHeight ? maxHeight + 'px' : 'auto'};
`

interface LayoutProps {
  children: ReactNode;
  className?: string;
  overflow?: 'hidden' | 'scroll';
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  overflow,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className,
  ...props
}) => {
  return (
    <LayoutElement
      className={['Layouts__Layout', 'Layout', className].join(' ')}
      overflow={overflow}
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      {...props}
    >
      {children}
    </LayoutElement>
  )
}
