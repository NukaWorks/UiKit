import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import cx from 'clsx'

const DEFAULT_CLASS = 'react-tabs__tab'
const defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: `${DEFAULT_CLASS}--disabled`,
  focus: false,
  id: null,
  selected: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`
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
  disabledClassName: PropTypes.string,
  focus: PropTypes.bool, // private
  id: PropTypes.string, // private
  selected: PropTypes.bool, // private
  selectedClassName: PropTypes.string,
  tabIndex: PropTypes.string,
  tabRef: PropTypes.func // private
}

export const Tab = (props) => {
  const nodeRef = useRef()
  const {
    children,
    className,
    disabled,
    disabledClassName,
    focus,
    id,
    selected,
    selectedClassName,
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
      className={cx(className, {
        [selectedClassName]: selected,
        [disabledClassName]: disabled
      })}
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
