import { ReactNode } from "react";

interface TabPanelProps {
  children: ReactNode;
  className?: string | string[] | object;
  forceRender?: boolean;
  id: string;
  selected?: boolean;
}

export function TabPanel({
  children,
  className,
  forceRender = false,
  id,
  selected,
  ...props
}: TabPanelProps) {
  return (
    <div
      {...props}
      className={[
        "Layouts__TabPanel",
        "TabPanel",
        selected ? "Layouts__TabPanel--selected" : "",
      ].join(" ")}
      role="tabpanel"
      id={`panel${id}`}
      aria-labelledby={`tab${id}`}
    >
      {forceRender || selected ? children : null}
    </div>
  );
}

TabPanel.tabsRole = "TabPanel";
