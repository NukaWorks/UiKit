import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './VBox.scss'
import { Box } from '../Box/Box'

export function VBox ({ children, className, ...props }: InferProps<typeof VBox.propTypes>) {
  return (
    <Box
      className={['App__Vbox', className].join(' ')}
      {...props}
    >
      {children}
    </Box>
  )
}

VBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
