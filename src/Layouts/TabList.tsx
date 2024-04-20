import React, { ReactNode } from "react";
import styled from "styled-components";

TabList.tabsRole = "TabList";

const TabListElement = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3px;
  padding-block: 5px;
`;

interface TabListProps {
  children: ReactNode;
  className?: string | string[] | object;
}

export function TabList({ children, className, ...props }: TabListProps) {
  return (
    <TabListElement
      {...props}
      className={["Layouts__TabList", "TabList"].join(" ")}
      role="tablist"
    >
      {children}
    </TabListElement>
  );
}
