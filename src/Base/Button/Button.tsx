import React, { forwardRef, ReactNode, useEffect, useState } from 'react'
import './Button.scss'

export interface ButtonProps {
  color?: 'Default' | 'Primary' | 'Success' | 'Warning' | 'Alert' | 'Disabled'
  theme?: 'Light' | 'Dark'
  size?: 'Small' | 'Medium' | 'Large'
  disabled?: boolean
  autofocus?: boolean
  label?: string
  children?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    children,
    color = 'Default',
    theme = 'Light',
    size = 'Small',
    disabled,
    onClick,
    autofocus,
    label,
    ...props
  }, ref) => {
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    setDisable(disabled || false)
  }, [disabled])

  return (
    <button
      type="button"
      className={[`App__${theme}`, 'Base__Button', 'Button', `Base__Button--${size}`, `Base__Button--${disabled ? 'Disabled' : color}`].join(' ')}
      ref={ref}
      autoFocus={autofocus}
      onClick={onClick}
      disabled={disable}
      {...props}
    >
      {label || children}
    </button>
  )
})

Button.displayName = 'Button'
