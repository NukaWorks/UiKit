import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StackLayout } from "./StackLayout";

const FlexLayoutElement = styled(StackLayout)<{
  direction: "Vertical" | "Horizontal";
  alignItems: "Start" | "Center" | "End" | "Stretch";
  alignContent: "Start" | "Center" | "End" | "Stretch";
  justifyItems:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly";
  justifyContent:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly";
  wrap: "wrap" | "nowrap";
  flex: number;
  spacing: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "Vertical" ? "column" : "row"};
  gap: ${({ spacing }) => `${spacing}px`};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-content: ${({ alignContent }) => alignContent};
  flex-wrap: ${({ wrap }) => wrap};
  flex: ${({ flex }) => flex};
`;

interface FlexLayoutProps {
  children: ReactNode;
  className?: string;
  spacing: number;
  direction: "Vertical" | "Horizontal";
  alignItems: "Start" | "Center" | "End" | "Stretch";
  alignContent: "Start" | "Center" | "End" | "Stretch";
  justifyItems:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly";
  justifyContent:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly";
  wrap: "wrap" | "nowrap";
  flex: number;
}

export const FlexLayout: FunctionComponent<FlexLayoutProps> = ({
  children,
  className,
  spacing,
  direction,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  wrap,
  flex,
  ...props
}) => {
  return (
    <FlexLayoutElement
      className={["Misc__FlexLayout", "FlexLayout", className].join(" ")}
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyItems={justifyItems}
      justifyContent={justifyContent}
      wrap={wrap}
      flex={flex}
      {...props}
    >
      {children}
    </FlexLayoutElement>
  );
};
