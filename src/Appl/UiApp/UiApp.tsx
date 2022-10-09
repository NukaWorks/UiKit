import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './UiApp.scss'

export function UiApp ({ children, className }: InferProps<typeof UiApp.propTypes>) {
  return (
    <div className={['Appl--UiApp', className].join(' ')}>
      { children }
    </div>
  )
}

UiApp.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
