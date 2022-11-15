import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Separator.scss'

export function Separator ({ className, ...props }: InferProps<typeof Separator.propTypes>) {
  return (
    <div className={['Misc__Separator', className].join(' ')} {...props} />
  )
}

Separator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
