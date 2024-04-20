import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface MenuItemProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const blinkAnim = keyframes`
    to {
        background-color: initial;
    }

    from {
        background-color: transparent;
        color: black;
    }
`;

const MenuItemElement = styled.div`
  user-select: none;
  -webkit-user-select: none;
  font-family: "Outfit", sans-serif;
  padding: 0.2em 0.25em;
  border-radius: 5px;
  white-space: nowrap;

  &:hover {
    background-color: #1ea7fd;
    color: white;
  }

  &:active {
    background-color: #1c9ae8;
    animation: ${blinkAnim} 0.03s;
    color: white;
  }
`;

export function MenuItem({
  children,
  className,
  onClick,
  ...props
}: MenuItemProps) {
  return (
    <MenuItemElement
      className={["Base__MenuItem", "MenuItem", className].join(" ")}
      onClick={() => (onClick ? onClick() : undefined)}
      {...props}
    >
      {children || "MenuItem empty"}
    </MenuItemElement>
  );
}
