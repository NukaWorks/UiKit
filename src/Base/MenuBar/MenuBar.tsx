import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuBar.scss'

export const HoverContext = React.createContext('false')

export function MenuBar ({ children, className }: InferProps<typeof MenuBar.propTypes>) {
  return (
      <HoverContext.Provider value={'false'}>
        <div className={['Base--MenuBar', className].join(' ')}>
          { children }
        </div>
      </HoverContext.Provider>
  )
}

MenuBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
