import React, { useEffect } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './Link.scss'

export function Link ({
  children,
  className,
  disabled,
  href,
  ...props
}: InferProps<typeof Link.propTypes>) {
  const [disable, setDisable] = React.useState(false)

  useEffect(() => {
    if (disabled) {
      setDisable(true)
    } else setDisable(false)
  }, [disabled])

  if (disable) {
    return (
        <a
            className={['Base__Link', className].join(' ')}
            href={href || ''}
            {...props}
        >
          {children}
        </a>
    )
  } else {
    return (
        <a
            className={['Base__Link--Disabled', className].join(' ')}
            {...props}
        >
          {children}
        </a>
    )
  }
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  props: PropTypes.any,
  href: PropTypes.string
}

Link.defaultProps = {
  disabled: false
}
