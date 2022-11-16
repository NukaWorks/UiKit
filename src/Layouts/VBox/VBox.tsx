import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './VBox.scss'

export function VBox ({ children, className, ...props }: InferProps<typeof VBox.propTypes>) {
  return (
    <div
        className={['Appl__ContextContent', className].join(' ')}
        {...props}
    >
      {children}
    </div>
  )
}

VBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
