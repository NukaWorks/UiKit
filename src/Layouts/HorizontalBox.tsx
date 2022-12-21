import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './HBox.scss'
import { Layout } from './Layout'

export function HorizontalBox ({ children, className, ...props }: InferProps<typeof HorizontalBox.propTypes>) {
  return (
      <Layout
          className={['Layouts__HBox', className].join(' ')}
          {...props}
      >
        {children}
      </Layout>
  )
}

HorizontalBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
