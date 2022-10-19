import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
/**
 * Only work on development mode
 * use "import '@powerws/uikit/styling'" to import css in production environment.
 */
import '../../Assets/Themes/index.scss'

export function AppActivity ({ children, className, theme } :InferProps<typeof AppActivity.propTypes>) {
  return (
    <div className={[`App__${theme}`, 'Appl__Application', className].join(' ')}>
        { children }
    </div>
  )
}

AppActivity.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.oneOf(['Light', 'Dark'])
}

AppActivity.defaultProps = {
  theme: 'Light'
}
