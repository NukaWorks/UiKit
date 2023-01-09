// @ts-nocheck

import React, { useEffect } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

const LinkElement = styled.a`
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  color: ${props => props.disabled ? props.theme.disabledColor : props.theme.color};
  cursor: pointer;
  padding-inline: 5px;
  border-radius: 5px;
  text-decoration: none;

  :hover {
    background-color: ${props => props.disabled ? 'transparent' : props.theme.backgroundColor};
    color: ${props => props.disabled ? props.theme.disabledColor : props.theme.hoverColor};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }

  :active {
    background-color: ${props => props.disabled ? 'initial' : props.theme.activeBackgroundColor};
    color: ${props => props.disabled ? props.theme.disabledColor : props.theme.activeColor};
    user-select: none;
    -webkit-user-select: none;
  }
`

const lightTheme = {
  color: '#0097EC',
  hoverColor: '#008ee3',
  activeColor: '#0485d2',
  disabledColor: '#bababa',
  backgroundColor: 'rgba(234, 234, 234, 0.4)',
  activeBackgroundColor: 'rgba(234, 234, 234, 0.50)'
}

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
    } else {
      setDisable(false)
    }
  }, [disabled, disable])

  if (disable) {
    return (
      <ThemeProvider theme={lightTheme}>
        <LinkElement
          className={[`Base__Link${disable ? '--Disabled' : ''}`, 'Link', className].join(' ')}
          disabled={disable}
          {...props}
        >
          {children}
        </LinkElement>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={lightTheme}>
        <LinkElement
          className={[`Base__Link${disable ? '--Disabled' : ''}`, 'Link', className].join(' ')}
          disabled={disable}
          href={href || null}
          {...props}
        >
          {children}
        </LinkElement>
      </ThemeProvider>
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
