import React, { forwardRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Button.scss'

// eslint-disable-next-line react/display-name
export const Button :any = forwardRef<HTMLButtonElement>((
  { children, color, theme, size, disabled, label, ...props } :InferProps<typeof Button.propTypes>, ref) => (
    <button
      type="button"
      className={[`App__${theme}`, 'Base__Button', `Base__Button--${size}`, `Base__Button--${color}`].join(' ')}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {label || children}
    </button>
))

Button.propTypes = {
  color: PropTypes.oneOf(['Default', 'Primary', 'Success', 'Warning', 'Alert', 'Disabled']),
  theme: PropTypes.oneOf(['Light', 'Dark']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  props: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'Default',
  theme: 'Light',
  size: 'Small'
}
