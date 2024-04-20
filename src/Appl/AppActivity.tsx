import React, { ReactNode } from "react";
import styled from "styled-components";
import { FlexLayout } from "../Layouts/FlexLayout";
import "../Common/Assets/Themes/index.scss";

const AppActivityElement = styled(FlexLayout)<{
  direction?: "Vertical" | "Horizontal";
}>`
  min-height: 100vh;
`;

interface AppActivityProps {
  className?: string;
  children?: ReactNode;
  direction?: "Vertical" | "Horizontal";
  theme?: "Light" | "Dark";
}

export function AppActivity({
  children,
  direction,
  className,
  theme = "Light",
  ...props
}: AppActivityProps) {
  return (
    // @ts-ignore
    <AppActivityElement
      className={[
        `App__${theme}`,
        "Appl__AppActivity",
        "AppActivity",
        className,
      ].join(" ")}
      direction={direction}
      {...props}
    >
      {children}
    </AppActivityElement>
  );
}
