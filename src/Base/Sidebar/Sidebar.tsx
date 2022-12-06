import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'
import '../../Assets/Themes/index.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import SidebarContext from './SidebarContext'

export function Sidebar ({ children, className, ...props }: InferProps<typeof Sidebar.propTypes>) {
  const [close, setClose] = useState(false)

  const handleToggle = () => setClose(!close)

  return (
    <SidebarContext.Provider value={{ close, handleToggle }}>
      <div
          className={['Base__Sidebar', close ? 'Base__Sidebar--Closed' : '', className].join(' ')}
          {...props}
      >
        <SidebarItem className="Base__Sidebar--MenuBtn" icon={'menu'} disableText onClick={() => handleToggle()}/>

        <div className={'Base__Sidebar--Content'}>
          {children || <SidebarItem text={'Sidebar Empty'} icon={'warning'} />}
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
