import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './HBox.scss'
import { Box } from '../Box/Box'

export function HBox ({ children, className, ...props }: InferProps<typeof HBox.propTypes>) {
  return (
      <Box
          className={['Layouts__HBox', className].join(' ')}
          {...props}
      >
        {children}
      </Box>
  )
}

HBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
