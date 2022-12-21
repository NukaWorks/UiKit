import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './VBox.scss'
import { Layout } from './Layout'

export function VerticalBox ({ children, className, ...props }: InferProps<typeof VerticalBox.propTypes>) {
  return (
    <Layout
      className={['Layouts__VerticalBox', 'VerticalBox', className].join(' ')}
      {...props}
    >
      {children}
    </Layout>
  )
}

VerticalBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
