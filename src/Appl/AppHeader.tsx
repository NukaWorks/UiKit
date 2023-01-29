// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Text } from '../Base/Text'
import styled from 'styled-components'

const HeaderElement = styled.header`
  font-family: "Outfit", sans-serif;
  background-color: ${({ displayBackground }) => displayBackground ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
  display: flex;
  align-items: center;
  gap: 10px;
  height: 2.5em;
  padding: 5px 10px;
  border-bottom: ${({ displayBackground }) => displayBackground ? '1px solid rgba(0, 0, 0, 0.2)' : 'none'};
  z-index: 2;`

const TextElement = styled(Text)`
  user-select: none;
  -webkit-user-select: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  display: inline-block;
  vertical-align: top;`

const ContentElement = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5px;`

export function AppHeader ({ children, displayBackground, className, title, ...props }: InferProps<typeof AppHeader.propTypes>) {
  return (
    <HeaderElement
        className={['Appl__Header', 'AppHeader', className].join(' ')}
        displayBackground={displayBackground}
        {...props}
    >
        <TextElement className={'Appl__Header--Title'}>{ title }</TextElement>
        <ContentElement className={'Appl__Header--Content'}>{ children }</ContentElement>
    </HeaderElement>
  )
}

AppHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  displayBackground: PropTypes.bool,
  children: PropTypes.any,
  props: PropTypes.any
}

AppHeader.defaultProps = {
  title: 'Hello World !',
  displayBackground: true
}
