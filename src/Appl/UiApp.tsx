import React, { ReactNode } from "react";
import styled from "styled-components";

const UiAppElement = styled.div`
  overflow: hidden;
  background-color: #fffefe;
  display: flex;
  flex-direction: column;
  flex: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 10px;
  padding-inline: 1em;
`;

interface UiAppProps {
  className?: string;
  children?: ReactNode;
}

export function UiApp({ children, className, ...props }: UiAppProps) {
  return (
    <UiAppElement
      className={["Appl__UiApp", "UiApp", className].join(" ")}
      {...props}
    >
      {children}
    </UiAppElement>
  );
}
