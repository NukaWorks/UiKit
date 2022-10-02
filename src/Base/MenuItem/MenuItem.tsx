import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuItem.scss'

export function MenuItem ({ children, className }: InferProps<typeof MenuItem.propTypes>) {
  return (
    <div className={['Base--MenuItem', className].join(' ')}>
      { children || 'MenuItem empty'}
    </div>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
