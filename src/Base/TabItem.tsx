import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { Text } from './Text'

const TabItemElement = styled.div`
  color: black;
  padding: 0.5em;
  border-radius: 5px;
  user-select: none;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export function TabItem ({ title, className, ...props }: InferProps<typeof TabItem.propTypes>) {
  return (
    <TabItemElement
        className={['Base__TabItem', 'TabItem', className].join(' ')}
        {...props}
    >
      <Text size={11}>{title}</Text>
    </TabItemElement>
  )
}

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  props: PropTypes.any
}
