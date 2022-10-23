import React, { useEffect, useRef, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Menu.scss'
import { useDetectClickOutside } from 'react-detect-click-outside'

function menuDrop (displayMenu: boolean, children: any) {
  if (displayMenu) return children
}

export function Menu ({ children, className, title, ...props }: InferProps<typeof Menu.propTypes>) {
  const [displayMenu, setDisplayMenu] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setDisplayMenu(false) })
  const menuTitle = useRef(null)

  useEffect(() => {
    if (displayMenu) { // @ts-ignore
      menuTitle.current.classList.add('active')
    } else { // @ts-ignore
      menuTitle.current.classList.remove('active')
    }
  })

  return (
    <div
      className={['Base__Menu', className].join(' ')}
      ref={ref}
      onClick={e => {
        setDisplayMenu(!displayMenu)
        e.preventDefault()
      }}
      {...props}
    >

      <div className={'Base__Menu--Title'} ref={menuTitle}>{ title }</div>
      { menuDrop(displayMenu, children) }
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  props: PropTypes.any
}
