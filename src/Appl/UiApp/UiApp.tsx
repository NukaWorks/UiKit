import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './UiApp.scss'

export function UiApp ({ children, className, rounded }: InferProps<typeof UiApp.propTypes>) {
  return (
    <div className={['Appl--UiApp', rounded ? 'Appl--UiApp__Rounded' : '', className].join(' ')}>
      { children }
    </div>
  )
}

UiApp.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.any
}
