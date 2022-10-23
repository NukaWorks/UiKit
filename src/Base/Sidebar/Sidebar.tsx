import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'

export function Sidebar ({ children, className, ...props }: InferProps<typeof Sidebar.propTypes>) {
  return (
    <div
        className={['Base__Sidebar', className].join(' ')}
        {...props}
    >
        Hello World !
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
