import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

const TabElement = styled.div`
  background-color: grey;
`

export function TabPane ({
  className,
  tabKey,
  id,
  name,
  active,
  children
}: InferProps<typeof TabPane.propTypes>) {
  return (
    <TabElement
      id={id && `${id}-panel-${tabKey}`}
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-labelledby={id && `${id}-tab-${tabKey}`}
      aria-hidden={!active}
    >

      {(active) && children}
    </TabElement>
  )
}

TabPane.propTypes = {
  tabKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  active: PropTypes.bool,
  className: PropTypes.string
}
