import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './HBox.scss'
import { Box } from '../Box/Box'

export function VBox ({ children, className, ...props }: InferProps<typeof VBox.propTypes>) {
  return (
      <Box
          className={['App__HBox', className].join(' ')}
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
