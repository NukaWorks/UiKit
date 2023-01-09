// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { StackLayout } from './StackLayout'

const FlexLayoutElement = styled(StackLayout)`
    display: flex;
    flex-direction: ${({ direction }) => direction === 'Vertical' ? 'column' : 'row'};
    gap: ${({ spacing }) => spacing + 'px'};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    justify-items: ${({ justifyItems }) => justifyItems};
    align-content: ${({ alignContent }) => alignContent};
    flex-wrap: ${({ wrap }) => wrap};
    flex: ${({ flex }) => flex};
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    min-width: ${({ minWidth }) => minWidth + 'px'};
    min-height: ${({ minHeight }) => minHeight + 'px'};
    max-width: ${({ maxWidth }) => maxWidth + 'px'};
    max-height: ${({ maxHeight }) => maxHeight + 'px'};;
`

export function FlexLayout ({
  children,
  className,
  spacing,
  direction,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  wrap,
  flex,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  ...props
}: InferProps<typeof FlexLayout.propTypes>) {
  return (
    <FlexLayoutElement
        className={['Misc__FlexLayout', 'FlexLayout', className].join(' ')}
        spacing={spacing}
        direction={direction}
        alignItems={alignItems}
        alignContent={alignContent}
        justifyItems={justifyItems}
        justifyContent={justifyContent}
        wrap={wrap}
        flex={flex}
        width={width}
        height={height}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        {...props}
    >
      { children }
    </FlexLayoutElement>
  )
}

FlexLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  spacing: PropTypes.number,
  direction: PropTypes.oneOf<string>(['Vertical', 'Horizontal']),
  alignItems: PropTypes.oneOf<string>(['Start', 'Center', 'End', 'Stretch']),
  alignContent: PropTypes.oneOf<string>(['Start', 'Center', 'End', 'Stretch']),
  justifyItems: PropTypes.oneOf<string>(['Start', 'Center', 'End', 'Stretch']),
  justifyContent: PropTypes.oneOf<string>(['Start', 'Center', 'End', 'Stretch']),
  wrap: PropTypes.oneOf<string>(['wrap', 'nowrap']),
  width: PropTypes.number,
  height: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  flex: PropTypes.number,
  props: PropTypes.any
}
