import React from 'react'
import PropTypes from 'prop-types'
/**
 * Only work on development mode
 * use "import '@powerws/uikit/styling'" to import css in production environment.
 */
import '../Common/Assets/Themes/index.scss'

export function AppActivity ({ children, className, theme, ...props }) {
  return (
    <div
        className={[`App__${theme}`, 'Appl__Application', 'AppActivity', className].join(' ')}
        {...props}
    >
        { children }
    </div>
  )
}

AppActivity.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.oneOf(['Light', 'Dark']),
  props: PropTypes.any
}

AppActivity.defaultProps = {
  theme: 'Light'
}
