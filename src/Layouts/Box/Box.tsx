import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Box.scss'

export function Box ({ children, className, ...props }: InferProps<typeof Box.propTypes>) {
  return (
    <div
        className={['Layouts__Box', className].join(' ')}
        {...props}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
