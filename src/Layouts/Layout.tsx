import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  overflow?: "hidden" | "scroll";
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  style?: React.CSSProperties;
}

const LayoutElement = styled.div<LayoutProps>`
  display: block;
  overflow: ${({ overflow }) => overflow};
  width: ${({ width }) => (width ? width + "px" : "auto")};
  height: ${({ height }) => (height ? height + "px" : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth + "px" : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight + "px" : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + "px" : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight + "px" : "auto")};
`;

export function Layout({
  children,
  overflow,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className,
  style = {},
}: Readonly<LayoutProps>) {
  return (
    <LayoutElement
      className={["Layouts__Layout", "Layout", className].join(" ")}
      overflow={overflow}
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      style={style}
    >
      {children}
    </LayoutElement>
  );
}
