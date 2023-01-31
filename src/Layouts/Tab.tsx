import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

const TabElement = styled.div`
  background-color: grey;
`

export function Tab ({
  className,
  tabKey,
  id,
  name,
  active,
  children
}: InferProps<typeof Tab.propTypes>) {

  return (
    <TabElement
      id={id && `${id}-panel-${tabKey}`}
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-labelledby={id && `${id}-tab-${tabKey}`}
      aria-hidden={!active}
    >

      <div>{ name }</div>
      <div>
        {(active) && children}
      </div>
    </TabElement>
  )
}

Tab.propTypes = {
  tabKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  active: PropTypes.bool,
  className: PropTypes.string
}
