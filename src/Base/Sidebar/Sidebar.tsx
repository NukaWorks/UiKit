import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'
import '../../Assets/Themes/index.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export function Sidebar ({ children, className, ...props }: InferProps<typeof Sidebar.propTypes>) {
  return (
    <div
        className={['Base__Sidebar', className].join(' ')}
        {...props}
    >
      <SidebarItem className="Base__Sidebar--MenuBtn" icon={'menu'} text={''}/>

      <div className={'Base__Sidebar--Content'}>
        {children || <SidebarItem text={'Sidebar Empty'} icon={'warning'} />}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
