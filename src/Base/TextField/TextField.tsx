import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './TextField.scss'

export function TextField ({ type, placeholder, className, disabled, ref } :InferProps<typeof TextField.propTypes>) {
  return (
    <input
        type={type || ''}
        placeholder={placeholder || ''}
        className={['Base__TextField', className].join(' ')}
        disabled={disabled || false}
    />
  )
}

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  ref: PropTypes.any,
  className: PropTypes.string
}

TextField.defaultProps = {
  type: 'text',
  disabled: false
}
