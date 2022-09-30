import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
/**
 * Only work on development mode
 * use "import '@powerws/uikit/styling'" to import css in production environment.
 */
import '../Assets/Themes/index.scss'

export function UiApp ({ children, className, theme } :InferProps<typeof UiApp.propTypes>) {
  return (
    <div className={[`app--${theme}`, 'appl--application', className].join(' ')}>
        {children}
    </div>
  )
}

UiApp.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.oneOf(['light', 'dark'])
}

UiApp.defaultProps = {
  theme: 'light'
}
