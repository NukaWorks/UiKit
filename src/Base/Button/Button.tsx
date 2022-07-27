import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Button.scss'

export function Button ({ color, theme, size, label } :InferProps<typeof Button.propTypes>) {
  return (
    <button
      type="button"
      className={['base--theme', 'base--button', `base--button__${size}`, `base--button__${color}`].join(' ')}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'success', 'warning', 'alert']),
  theme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'default',
  theme: 'light',
  size: 'small'
}
