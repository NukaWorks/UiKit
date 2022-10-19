import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Sidebar.scss'

export function Sidebar ({ children, className }: InferProps<typeof Sidebar.propTypes>) {
  return (
    <div className={['Base__Sidebar', className].join(' ')}>
        Hello World !
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
