import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './SidebarItem.scss'

export function SidebarItem ({ text, disableText, icon, className, onClick, ...props }: InferProps<typeof SidebarItem.propTypes>) {
  return (
    <div
        className={['Base__SidebarItem', className].join(' ')}
        onClick={onClick}
        {...props}
    >

      <span className="material-symbols-rounded">
        {icon}
      </span>

      {disableText ||
          (<div className={'Base__SidebarItem--Text'}>
            {text}
          </div>)
      }
    </div>
  )
}

SidebarItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  disableText: PropTypes.bool,
  onClick: PropTypes.any,
  className: PropTypes.string,
  props: PropTypes.any
}
