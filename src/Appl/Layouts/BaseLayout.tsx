import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import '../../Assets/Themes/Default/index.scss'

export function BaseLayout ({ children, className } :InferProps<typeof BaseLayout.propTypes>) {
  return (
    <div className={['appl--application', className].join(' ')}>
        {children}
    </div>
  )
}

BaseLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

BaseLayout.defaultProps = {}
