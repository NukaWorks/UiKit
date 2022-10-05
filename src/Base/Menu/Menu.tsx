import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Menu.scss'
import { useDetectClickOutside } from 'react-detect-click-outside'

function menuDrop (displayMenu: boolean, children: any) {
  if (displayMenu) return children
}

export function Menu ({ children, className, title }: InferProps<typeof Menu.propTypes>) {
  const [displayMenu, setDisplayMenu] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setDisplayMenu(false) })

  return (
    <div className={['Base--Menu', className].join(' ')} ref={ref} onClick={e => {
      setDisplayMenu(!displayMenu)
      e.preventDefault()
    }}>

      <div className={'Base--Menu__Title'}>
        { title }
      </div>

      { menuDrop(displayMenu, children) }
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}
