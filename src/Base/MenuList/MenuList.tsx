import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuList.scss'
import { MenuItem } from '../MenuItem/MenuItem'

export function MenuList ({ className, children }: InferProps<typeof MenuList.propTypes>) {
  return (
    <div className={['Base__MenuList', className].join(' ')}>
      { children || <MenuItem />}
    </div>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
