// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const TabbedLayoutElement = styled.div`
  // background-color: white;
  width: 100%;
`

export function TabbedLayout ({
  children,
  onChange,
  defaultActiveId,
  className,
  ...props
}: InferProps<typeof TabbedLayout.propTypes>) {
  return (
    <TabbedLayoutElement
      className={['Layouts__TabbedLayout', 'TabbedLayout', className].join(' ')}
      defaultActiveId={defaultActiveId}
      onChange={onChange}
      {...props}
    >

      { children }
    </TabbedLayoutElement>
  )
}

TabbedLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  defaultActiveId: PropTypes.string.isRequired,
  props: PropTypes.any
}
