import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Link.scss'

export function Link ({ children, className, href, ...props }: InferProps<typeof Link.propTypes>) {
  return (
    <a
        className={['Base__Link', className].join(' ')}
        href={href || ''}
        {...props}
    >
      { children }
    </a>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
  href: PropTypes.string
}
