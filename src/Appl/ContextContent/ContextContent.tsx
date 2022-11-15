import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './ContextContent.scss'

export function ContextContent ({ children, className, ...props }: InferProps<typeof ContextContent.propTypes>) {
  return (
    <div
        className={['Appl__ContextContent', className].join(' ')}
        {...props}
    >
      {children}
    </div>
  )
}

ContextContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
