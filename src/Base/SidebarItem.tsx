import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface SidebarItemProps {
  text?: string
  icon?: string
  active?: boolean
  disableText?: boolean
  children?: ReactNode
  onClick?: () => void
  className?: string
}

const SidebarItemElement = styled.div<{ active?: boolean }>`
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
    }
`

const IconElement = styled.span<{ active?: boolean }>`
    font-variation-settings: ${props => props.active ? 'FILL 1' : 'FILL 0'};
`

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
  }: SidebarItemProps) {
  return (
    <SidebarItemElement
      className={['Base__SidebarItem', 'SidebarItem', active ? 'Base__SidebarItem--Activated SidebarItemActive' : '', className].join(' ')}
      onClick={onClick}
      {...props}
    >
      <IconElement className="material-symbols-rounded">
        {icon}
      </IconElement>

      {!disableText &&
        (<div className={'Base__SidebarItem--Text'}>
          {text || children}
        </div>)
      }
    </SidebarItemElement>
  )
}
