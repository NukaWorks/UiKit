import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuItem.scss'

export function MenuItem ({ children, className, onClick, ...props }: InferProps<typeof MenuItem.propTypes>) {
  return (
    <div className={['Base__MenuItem', className].join(' ')} onClick={() => onClick ? onClick() : undefined}>
      { children || 'MenuItem empty'}
    </div>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
  onClick: PropTypes.func
}
