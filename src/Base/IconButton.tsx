import styled from "styled-components";
import React, { forwardRef, ReactElement } from "react";
import { ComponentBaseProps } from "../Common/Interfaces";
import { buttonBaseStyling } from "../Common/Styling/buttonBaseStyling";
import { baseStyling } from "../Common/Styling/baseStyling";

interface IconButtonProps extends ComponentBaseProps {
  isGrouped?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

interface GroupIconButtonsProps extends Omit<ComponentBaseProps, "onClick"> {
  children: React.ReactNode;
}

const StyledIconButton = styled.button<IconButtonProps>`
  ${baseStyling};
  ${buttonBaseStyling};
  display: grid;
  place-items: center;
  background: none;
  color: ${({ theme }) =>
    theme.IconButton.color[theme === "Dark" ? "dark" : "light"]};
  padding: ${({ theme }) => theme.IconButton.padding};
  border-radius: ${({ theme, isGrouped, isFirst, isLast }) => {
    if (!isGrouped) return theme.IconButton.borderRadius;
    if (isFirst)
      return `${theme.IconButton.borderRadius} 0 0 ${theme.IconButton.borderRadius}`;
    if (isLast)
      return `0 ${theme.IconButton.borderRadius} ${theme.IconButton.borderRadius} 0`;
    return "0";
  }};

  ${({ isGrouped }) =>
    isGrouped &&
    `
        border-right-width: ${isGrouped ? "0.5px" : "1px"};
        margin: 0;
        
        &:last-child {
            border-right-width: 1px;
        }
    `}

  &:hover {
    background-color: ${({ theme }) => theme.IconButton.hover.backgroundColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.IconButton.active.backgroundColor};
  }

  &:focus-within {
    box-shadow: ${({ theme }) =>
      `${theme.IconButton.focus.shadowColor} 0 0 0 0.3em`};
  }
`;

const GroupContainer = styled.div`
  display: inline-flex;
  align-items: center;

  ${StyledIconButton} {
    &:not(:first-child) {
      border-left: none;
    }
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ isGrouped, isFirst, isLast, ...props }, ref) => {
    return (
      <StyledIconButton
        isGrouped={isGrouped}
        isFirst={isFirst}
        isLast={isLast}
        {...props}
        ref={ref}
      >
        {props.children ?? "X"}
      </StyledIconButton>
    );
  }
);

export const GroupIconButtons: React.FC<GroupIconButtonsProps> = ({
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <GroupContainer {...props}>
      {React.Children.map(childrenArray, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<IconButtonProps>, {
            isGrouped: true,
            isFirst: index === 0,
            isLast: index === childrenArray.length - 1,
          });
        }
        return child;
      })}
    </GroupContainer>
  );
};

IconButton.displayName = "IconButton";
GroupIconButtons.displayName = "GroupIconButtons";
