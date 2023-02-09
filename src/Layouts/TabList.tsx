import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

TabList.tabsRole = 'TabList'

const TabListElement = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3px;
  padding-block: 5px;
`

export function TabList ({ children, className, ...props }): InferProps<typeof TabList.propTypes> {
  return (
    <TabListElement {...props} className={['Layouts__TabList', 'TabList'].join(' ')} role="tablist">
      {children}
    </TabListElement>
  )
}

TabList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ])
}
