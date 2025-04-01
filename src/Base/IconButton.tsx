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
  color: ${({ theme }) => (theme === "Dark" ? "white" : "black")};
  padding: 5px 8px;
  border-radius: ${({ isGrouped, isFirst, isLast }) => {
    if (!isGrouped) return "3px";
    if (isFirst) return "3px 0 0 3px";
    if (isLast) return "0 3px 3px 0";
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
    background-color: rgba(166, 164, 164, 0.29);
  }

  &:active {
    background-color: #bebebe;
  }

  &:focus-within {
    box-shadow: rgba(220, 220, 220, 0.3) 0 0 0 0.3em;
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
