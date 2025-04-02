import React from "react";
import { Layout, LayoutProps } from "./Layout";
import styled from "styled-components";

export interface StackLayoutProps extends LayoutProps {
  spacing?: number;
  direction?: "Horizontal" | "Vertical";
}

const StackLayoutElement = styled(Layout)<StackLayoutProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "Vertical" ? "column" : "row"};
  gap: ${({ spacing }) => `${spacing}px`};
`;

export function StackLayout({
  children,
  className,
  spacing = 0,
  direction = "Horizontal",
  style = {},
  ...props
}: Readonly<StackLayoutProps>) {
  return (
    <StackLayoutElement
      className={["Layouts__StackLayout", "StackLayout", className].join(" ")}
      spacing={spacing}
      direction={direction}
      style={style}
      {...props}
    >
      {children}
    </StackLayoutElement>
  );
}
