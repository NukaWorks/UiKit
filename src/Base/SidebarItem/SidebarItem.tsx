import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './SidebarItem.scss'

export function SidebarItem ({ text, icon, className, ...props }: InferProps<typeof SidebarItem.propTypes>) {
  return (
    <div
        className={['Base__SidebarItem', className].join(' ')}
        {...props}
    >
      <span className="material-symbols-rounded">
        {icon}
      </span>
      {text}
    </div>
  )
}

SidebarItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.any
}
