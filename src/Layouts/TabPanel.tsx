import PropTypes, { InferProps } from 'prop-types'
import React from 'react'

export function TabPanel ({
  children,
  className,
  forceRender,
  id,
  selected,
  ...props
}): InferProps<typeof TabPanel.propTypes> {
  return (
    <div
      {...props}
      className={['Layouts__TabPanel', 'TabPanel', selected ? 'Layouts__TabPanel--selected' : ''].join(' ')}
      role="tabpanel"
      id={`panel${id}`}
      aria-labelledby={`tab${id}`}
    >
      {forceRender || selected ? children : null}
    </div>
  )
}

TabPanel.tabsRole = 'TabPanel'

TabPanel.defaultProps = {
  forceRender: false
}
TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  forceRender: PropTypes.bool,
  id: PropTypes.string, // private
  selected: PropTypes.bool // private
}
