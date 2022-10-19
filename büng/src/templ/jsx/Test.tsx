import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Test.scss'

export function Test ({ children, className }: InferProps<typeof Test.propTypes>) {
  return (
    <div className={['CATEGORY__test', className].join(' ')}>
        Hello World !
    </div>
  )
}

Test.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
