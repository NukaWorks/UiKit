// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const LayoutElement = styled.div`
  display: block;
  //overflow: hidden;
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  min-width: ${({ minWidth }) => minWidth + 'px'};
  min-height: ${({ minHeight }) => minHeight + 'px'};
  max-width: ${({ maxWidth }) => maxWidth + 'px'};
  max-height: ${({ maxHeight }) => maxHeight + 'px'};;
`

export function Layout ({
  children,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className,
  ...props
}: InferProps<typeof Layout.propTypes>) {
  return (
    <LayoutElement
      className={['Layouts__Layout', 'Layout', className].join(' ')}
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

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  scrollable: PropTypes.bool,
  props: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number
}
