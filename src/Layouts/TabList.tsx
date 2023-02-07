import PropTypes, { InferProps } from 'prop-types'
import React from 'react'

TabList.tabsRole = 'TabList'
export function TabList ({ children, className, ...props }): InferProps<typeof TabList.propTypes> {
  return (
    <ul {...props} className={['Layouts__TabList', 'TabList'].join(' ')} role="tablist">
      {children}
    </ul>
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
