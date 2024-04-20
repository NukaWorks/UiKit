import React, { ReactNode } from "react";
import styled from "styled-components";
import { ScrollLayout } from "../Layouts/ScrollLayout";

export interface ListViewProps {
  className?: string;
  children?: ReactNode;
}

const ListElement = styled(ScrollLayout)`
  display: block;

  & > div:hover {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export function ListView({ children, className, ...props }: ListViewProps) {
  return (
    <ListElement
      className={["Base__ListView", "ListView", className].join(" ")}
      {...props}
    >
      {children}
    </ListElement>
  );
}
