import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './AppHeader.scss'

export function AppHeader ({ children, className }: InferProps<typeof AppHeader.propTypes>) {
  return (
    <header className={['appl--header', className].join(' ')}>
        <h1>Hello World !</h1>
    </header>
  )
}

AppHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
