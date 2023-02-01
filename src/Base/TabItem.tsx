import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const TabItemElement = styled.div`
  color: deeppink;
`

export function TabItem ({ title, className, ...props }: InferProps<typeof TabItem.propTypes>) {
  return (
    <TabItemElement
        className={['Base__TabItem', 'TabItem', className].join(' ')}
        {...props}
    >
      { title }
    </TabItemElement>
  )
}

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  props: PropTypes.any
}
