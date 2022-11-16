import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'
import '../../Assets/Themes/index.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export function Sidebar ({ children, className, ...props }: InferProps<typeof Sidebar.propTypes>) {
  const [close, setClose] = useState(false)

  const handleToggle = () => setClose(!close)

  return (
    <div
        className={['Base__Sidebar', close ? 'Base__Sidebar--Closed' : '', className].join(' ')}
        {...props}
    >
      <SidebarItem className="Base__Sidebar--MenuBtn" icon={'menu'} disableText onClick={() => handleToggle()}/>

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
