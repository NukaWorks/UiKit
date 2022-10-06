import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './AppActivity.scss'

export function AppActivity ({ children, className }: InferProps<typeof AppActivity.propTypes>) {
  return (
    <div className={['Appl--AppActivity', className].join(' ')}>
        Hello World !
    </div>
  )
}

AppActivity.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
