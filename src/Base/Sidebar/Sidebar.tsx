import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'
import '../../Assets/Themes/index.scss'

export function Sidebar ({ children, className, ...props }: InferProps<typeof Sidebar.propTypes>) {
  return (
    <div
        className={['Base__Sidebar', className].join(' ')}
        {...props}
    >
      <span className="material-symbols-rounded">
        menu
      </span>

      <div className={'Base__Sidebar--Content'}>
        {children}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
