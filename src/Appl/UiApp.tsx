import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const UiAppElement = styled.div`
  overflow: hidden;
  background-color: #FFFEFE;
  display: flex;
  flex-direction: column;
  flex: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 10px;
  padding-inline: 1em;
`

export function UiApp ({ children, className, ...props }: InferProps<typeof UiApp.propTypes>) {
  return (
    <UiAppElement
        className={['Appl__UiApp', 'UiApp', className].join(' ')}
        {...props}
    >
      { children }
    </UiAppElement>
  )
}

UiApp.propTypes = {
  className: PropTypes.string,
  props: PropTypes.any,
  children: PropTypes.any
}
