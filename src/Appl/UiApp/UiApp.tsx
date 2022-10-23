import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './UiApp.scss'

export function UiApp ({ children, className, rounded, ...props }: InferProps<typeof UiApp.propTypes>) {
  return (
    <div className={['Appl__UiApp', rounded ? 'Appl__UiApp--Rounded' : '', className].join(' ')}>
      { children }
    </div>
  )
}

UiApp.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  props: PropTypes.any,
  children: PropTypes.any
}
