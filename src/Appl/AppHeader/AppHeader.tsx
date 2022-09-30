import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './AppHeader.scss'
import { Text } from '../../Base/Text/Text'

export function AppHeader ({ children, className, title }: InferProps<typeof AppHeader.propTypes>) {
  return (
    <header className={['appl--header', className].join(' ')}>
        <Text>{ title }</Text>
    </header>
  )
}

AppHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any
}

AppHeader.defaultProps = {
  title: 'Hello World !'
}
