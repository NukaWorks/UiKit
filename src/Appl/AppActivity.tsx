import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
/**
 * Only work on development mode
 * use "import '@powerws/uikit/styling'" to import css in production environment.
 */
import '../Common/Assets/Themes/index.scss'
import styled from 'styled-components'
import { FlexLayout } from '../Layouts/FlexLayout'

const AppActivityElement = styled(FlexLayout)`
  min-height: 100vh;
`

export function AppActivity ({ children, direction, className, theme, ...props } :InferProps<typeof AppActivity.propTypes>) {
  return (
    <AppActivityElement
        className={[`App__${theme}`, 'Appl__AppActivity', 'AppActivity', className].join(' ')}
        direction={direction}
        {...props}
    >
        { children }
    </AppActivityElement>
  )
}

AppActivity.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  direction: PropTypes.oneOf(['Vertical', 'Horizontal']),
  theme: PropTypes.oneOf(['Light', 'Dark']),
  props: PropTypes.any
}

AppActivity.defaultProps = {
  theme: 'Light'
}
