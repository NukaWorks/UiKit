import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './TextField.scss'

export function TextField ({ type, placeholder, className } :InferProps<typeof TextField.propTypes>) {
  return (
    <input
        type={type || ''}
        placeholder={placeholder || ''}
        className={['Base__TextField', className].join(' ')}
    />
  )
}

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']),
  placeholder: PropTypes.string,
  className: PropTypes.string
}

TextField.defaultProps = {
  type: 'text'
}
