import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Button.scss'

export function Button ({ primary, size, label } :InferProps<typeof Button.propTypes>) {
  const mode = primary ? 'base--button__primary' : 'base--button__secondary'
  return (
    <button
      type="button"
      className={['base--button', `base--button--${size}`, mode].join(' ')}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  primary: false,
  size: 'small'
}
