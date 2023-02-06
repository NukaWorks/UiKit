import React, { createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

const TabElement = styled.div`
  background-color: grey;
`

export const TabContext = createContext(new Map<string, object>())

export function TabPane ({
  className,
  tabKey,
  name,
  active,
  children
}: InferProps<typeof TabPane.propTypes>) {
  const tabs = useContext(TabContext)

  useEffect(() => {
    if (tabs && !tabs.has(tabKey)) tabs.set(tabKey, { name, id: tabKey })
  }, [tabs, tabKey, name])

  return (
    <TabElement
      id={tabKey && `${tabKey}-panel-${name}`}
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-labelledby={tabKey && `${tabKey}-tab-${name}`}
    >

      {(active) && children}
    </TabElement>
  )
}

TabPane.propTypes = {
  tabKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  active: PropTypes.bool,
  className: PropTypes.string
}
