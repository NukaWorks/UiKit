import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Text.scss'

export function Text ({ className, text, children, ...props } :InferProps<typeof Text.propTypes>) {
  return (
    <div
        className={['Base__Text', className].join(' ')}
        {...props}
    >
        { text || children }
    </div>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
}

Text.defaultProps = {}
