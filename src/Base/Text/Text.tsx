import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Text.scss'

export function Text ({ className, text, children } :InferProps<typeof Text.propTypes>) {
  return (
    <div className={['base--text', className].join(' ')}>
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
