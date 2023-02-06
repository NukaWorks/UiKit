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
  defaultActiveKey,
  className,
  ...props
}: InferProps<typeof TabbedLayout.propTypes>) {
  return (
      <TabbedLayoutElement
        className={['Layouts__TabbedLayout', 'TabbedLayout', className].join(' ')}
        defaultActiveId={defaultActiveKey}
        onChange={onChange}
        {...props}
      >

        { children }
      </TabbedLayoutElement>
  )
}

TabbedLayout.propTypes = {
  defaultActiveKey: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  props: PropTypes.any
}
