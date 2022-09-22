import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuList.scss'

export function MenuList ({ children, className }: InferProps<typeof MenuList.propTypes>) {
  return (
    <div className={['Base--MenuList', className].join(' ')}>
        Hello World !
    </div>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
