import React, { forwardRef, useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Button.scss'

// eslint-disable-next-line react/display-name
export const Button: any = forwardRef<HTMLButtonElement>((
  {
    children,
    color,
    theme,
    size,
    disabled,
    autofocus,
    label,
    ...props
  }: InferProps<typeof Button.propTypes>, ref) => {
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (disabled) {
      setDisable(true)
    } else setDisable(false)
  }, [disabled])

  return (
      <button
          type="button"
          className={[`App__${theme}`, 'Base__Button', `Base__Button--${size}`, `Base__Button--${disabled ? 'Disabled' : color}`].join(' ')}
          ref={ref}
          autoFocus={autofocus}
          disabled={disable}
          {...props}
      >
        {label || children}
      </button>
  )
})

Button.propTypes = {
  color: PropTypes.oneOf(['Default', 'Primary', 'Success', 'Warning', 'Alert', 'Disabled']),
  theme: PropTypes.oneOf(['Light', 'Dark']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  disabled: PropTypes.bool,
  autofocus: PropTypes.bool,
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
