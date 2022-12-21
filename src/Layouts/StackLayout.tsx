import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './HBox.scss'
import { Layout } from './Layout'

export function StackLayout ({ children, className, ...props }: InferProps<typeof StackLayout.propTypes>) {
  return (
      <Layout
          className={['Layouts__StackLayout', 'StackLayout', className].join(' ')}
          {...props}
      >
        {children}
      </Layout>
  )
}

StackLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
