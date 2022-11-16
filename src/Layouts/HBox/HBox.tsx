import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './HBox.scss'

export function HBox ({ children, className, ...props }: InferProps<typeof HBox.propTypes>) {
  return (
    <div
        className={['Layouts__HBox', className].join(' ')}
        {...props}
    >
      {children}
    </div>
  )
}

HBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
