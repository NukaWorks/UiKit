import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

export function Layout ({ children, className, ...props }: InferProps<typeof Layout.propTypes>) {
  return (
    <div
        className={['Layouts__Box', className].join(' ')}
        {...props}
    >
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
