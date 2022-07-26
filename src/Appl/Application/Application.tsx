import React from 'react'
import '../../Assets/Themes/Default/index.scss'
import PropTypes, { InferProps } from 'prop-types'

export function Application ({ children, className } :InferProps<typeof Application.propTypes>) {
  return (
    <div className={['appl--application', className].join(' ')}>
        {children}
    </div>
  )
}

Application.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Application.defaultProps = {}
