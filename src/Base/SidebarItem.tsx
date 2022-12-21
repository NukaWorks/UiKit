// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const SidebarItemElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: inherit;
  gap: 5px;
  border-radius: 10px;
  font-size: 13pt;
  padding: 0.5em;

  background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.050' : 'transparent'};

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }`

const IconElement = styled.span`
  font-variation-settings: ${props => props.active ? 'FILL 1' : 'FILL 0'};`

export function SidebarItem (
  {
    text,
    children,
    active,
    disableText,
    icon,
    className,
    onClick,
    ...props
  }: InferProps<typeof SidebarItem.propTypes>) {
  return (
      <SidebarItemElement
          className={['Base__SidebarItem', 'SidebarItem', active ? 'Base__SidebarItem--Activated SidebarItemActive' : '', className].join(' ')}
          onClick={onClick}
          {...props}
      >

      <IconElement className="material-symbols-rounded">
        {icon}
      </IconElement>

        {disableText ||
            (<div className={'Base__SidebarItem--Text'}>
              {text || children}
            </div>)
        }
      </SidebarItemElement>
  )
}

SidebarItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any,
  disableText: PropTypes.bool,
  onClick: PropTypes.any,
  className: PropTypes.string,
  props: PropTypes.any
}
