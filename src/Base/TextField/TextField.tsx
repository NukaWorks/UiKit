import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './TextField.scss'

export function TextField ({ type, placeholder, className } :InferProps<typeof TextField.propTypes>) {
  return (
    <input
        type={'text'}
        placeholder={placeholder || ''}
        className={
            ['base--textfield',
              className].join(' ')}
    />
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

TextField.defaultProps = {
  type: 'text'
}
