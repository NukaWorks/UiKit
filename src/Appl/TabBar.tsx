import React, { useContext } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { TabContext } from '../Layouts/TabPane'
import { TabItem } from '../Base/TabItem'

const TabBarElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

function parseTabs (tabs: Map<string, object>) {
  const parsedTabs = []

  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of tabs) {
    parsedTabs.push(value)
  }

  return parsedTabs
}

export function TabBar ({
  className,
  ...props
}: InferProps<typeof TabBar.propTypes>) {
  const tabs = useContext(TabContext)

  return (
    <TabBarElement
      className={['Base__TabBar', 'TabBar', className].join(' ')}
      {...props}
    >

      { parseTabs(tabs).map((tab) => <TabItem title={tab.name} key={tab.id} />) }
    </TabBarElement>
  )
}

TabBar.propTypes = {
  className: PropTypes.string,
  props: PropTypes.any
}
