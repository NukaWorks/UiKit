import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuBar.scss'

export const HoverContext = React.createContext('false')

export function MenuBar ({ children, className, ...props }: InferProps<typeof MenuBar.propTypes>) {
  return (
      <HoverContext.Provider value={'false'}>
        <div
            className={['Base__MenuBar', className].join(' ')}
            {...props}
        >
          { children }
        </div>
      </HoverContext.Provider>
  )
}

MenuBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
