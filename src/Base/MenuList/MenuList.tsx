import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuList.scss'
import { MenuItem } from '../MenuItem/MenuItem'

export function MenuList ({ className, children, title }: InferProps<typeof MenuList.propTypes>) {
  return (
    <div className={['Base--MenuList', className].join(' ')}>
      <div className={'Base--MenuList__Title'}>
        { title }
      </div>
      <div className={'Base--MenuList__ListContainer'}>
        { children || <MenuItem />}
      </div>
    </div>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string.isRequired
}
