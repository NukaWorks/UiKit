import React, { useEffect } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

// @ts-ignore
const TextElement = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: 9pt;
  color: ${props => (props.disabled ? '#bababa' : 'white')};`

export function Text ({ className, text, disabled, children, ...props } :InferProps<typeof Text.propTypes>) {
  const [disable, setDisable] = React.useState(false)

  useEffect(() => {
    if (disabled) {
      setDisable(true)
    } else setDisable(false)
  }, [disabled])

  // @ts-ignore
  return (
    <TextElement
        className={['Base__Text', disable ? 'Base__Text--Disabled' : '', className].join(' ')}
        disabled={disable}
        {...props}
    >
        { text || children }
    </TextElement>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}

Text.defaultProps = {
  disabled: false
}
