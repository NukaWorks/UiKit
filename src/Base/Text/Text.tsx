import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Text.scss'

export default function Text ({ className, text } :InferProps<typeof Text.propTypes>) {
  return (
    <div className={['base--text', className].join(' ')}>
        { text }
    </div>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

Text.defaultProps = {}
