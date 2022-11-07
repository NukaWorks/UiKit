import React, { useEffect } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Text.scss'

export function Text ({ className, text, disabled, children, ...props } :InferProps<typeof Text.propTypes>) {
  const [disable, setDisable] = React.useState(false)

  useEffect(() => {
    if (disabled) {
      setDisable(true)
    } else setDisable(false)
  }, [disabled])

  return (
    <div
        className={['Base__Text', disable ? 'Base__Text--Disabled' : '', className].join(' ')}
        {...props}
    >
        { text || children }
    </div>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}

Text.defaultProps = {
  disabled: false
}
