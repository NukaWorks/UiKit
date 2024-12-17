import React, { ReactNode } from "react";
import styled from "styled-components";
import { StackLayout } from "./StackLayout";

interface FlexLayoutProps {
  children: ReactNode;
  className?: string;
  spacing?: number;
  direction?: "Vertical" | "Horizontal";
  alignItems?: "Start" | "Center" | "End" | "Stretch" | "Unset";
  alignContent?: "Start" | "Center" | "End" | "Stretch" | "Unset";
  justifyItems?:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly"
    | "Unset";
  justifyContent?:
    | "Start"
    | "Center"
    | "End"
    | "Stretch"
    | "Space-Between"
    | "Space-Around"
    | "Space-Evenly"
    | "Unset";
  wrap?: "wrap" | "nowrap";
  flex?: number;
  style?: React.CSSProperties;
}

const FlexLayoutElement = styled(StackLayout)<Required<FlexLayoutProps>>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "Vertical" ? "column" : "row"};
  gap: ${({ spacing }) => `${spacing}px`};
  align-items: ${({ alignItems }) => alignItems.toLowerCase()};
  justify-content: ${({ justifyContent }) => justifyContent.toLowerCase()};
  justify-items: ${({ justifyItems }) => justifyItems.toLowerCase()};
  align-content: ${({ alignContent }) => alignContent.toLowerCase()};
  flex-wrap: ${({ wrap }) => wrap.toLowerCase()};
  flex: ${({ flex }) => flex};
`;

export function FlexLayout({
  children,
  className,
  spacing = 0,
  direction = "Vertical",
  alignItems = "Unset",
  alignContent = "Unset",
  justifyItems = "Unset",
  justifyContent = "Unset",
  wrap = "wrap",
  flex = 0,
  style = {},
}: Readonly<FlexLayoutProps>) {
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
      style={style}
    >
      {children}
    </FlexLayoutElement>
  );
}
