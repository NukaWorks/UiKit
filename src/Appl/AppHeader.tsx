import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Text } from '../Base/Text/Text'
import styled from 'styled-components'

const HeaderElement = styled.header`
  font-family: "Outfit", sans-serif;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 2.5em;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  gap: 5px;`

export function AppHeader ({ children, className, title, ...props }: InferProps<typeof AppHeader.propTypes>) {
  return (
    <HeaderElement
        className={['Appl__Header', className].join(' ')}
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
  children: PropTypes.any,
  props: PropTypes.any
}

AppHeader.defaultProps = {
  title: 'Hello World !'
}
