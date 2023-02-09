import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'

const DEFAULT_CLASS = 'react-tabs__tab'
const defaultProps = {
  className: DEFAULT_CLASS,
  focus: false,
  id: null,
  selected: false
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  disabled: PropTypes.bool,
  focus: PropTypes.bool, // private
  id: PropTypes.string, // private
  selected: PropTypes.bool, // private
  tabIndex: PropTypes.string,
  tabRef: PropTypes.func // private
}

export const Tab = (props) => {
  const nodeRef = useRef()
  const {
    children,
    className,
    disabled,
    focus,
    id,
    selected,
    tabIndex,
    tabRef,
    ...attributes
  } = props

  useEffect(() => {
    if (selected && focus) {
      // @ts-ignore
      nodeRef.current.focus()
    }
  }, [selected, focus])

  return (
    <li
      {...attributes}
      className={['Layouts__Tab', 'Tab', selected ? 'Layouts__Tab--selected' : '', disabled ? 'Layouts__Tab--disabled' : ''].join(' ')}
      ref={(node) => {
        // @ts-ignore
        nodeRef.current = node
        if (tabRef) tabRef(node)
      }}
      role="tab"
      id={`tab${id}`}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={`panel${id}`}
      tabIndex={tabIndex || (selected ? '0' : null)}
      data-rttab
    >
      {children}
    </li>
  )
}
Tab.propTypes = propTypes

Tab.tabsRole = 'Tab'
Tab.defaultProps = defaultProps
