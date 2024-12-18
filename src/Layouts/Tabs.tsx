import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { UncontrolledTabs } from "./UncontrolledTabs";
import { getTabsCount } from "../Common/Helpers/Tabs/count";

const MODE_CONTROLLED = 0;
const MODE_UNCONTROLLED = 1;

interface TabsProps {
  children: ReactNode;
  className?: string | string[] | object;
  defaultFocus?: boolean;
  defaultIndex?: number;
  direction?: "rtl" | "ltr";
  disabledTabClassName?: string;
  disableUpDownKeys?: boolean;
  disableLeftRightKeys?: boolean;
  domRef?: (node: HTMLElement) => void;
  environment?: object;
  focusTabOnClick?: boolean;
  forceRenderTabPanel?: boolean;
  onSelect?: (index: number, last: number, event: Event) => boolean | void;
  selectedIndex?: number | null;
  selectedTabClassName?: string;
  selectedTabPanelClassName?: string;
}

const getModeFromProps = (
  props: Omit<
    TabsProps,
    | "focusTabOnClick"
    | "defaultFocus"
    | "defaultIndex"
    | "children"
    | "onSelect"
  >
) => {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};

const checkForIllegalModeChange = (
  props: Omit<
    TabsProps,
    | "focusTabOnClick"
    | "defaultFocus"
    | "defaultIndex"
    | "children"
    | "onSelect"
  >,
  mode: number
) => {
  if (
    process.env.NODE_ENV !== "production" &&
    mode !== undefined &&
    mode !== getModeFromProps(props)
  ) {
    throw new Error(
      `Switching between controlled mode (by using \`selectedIndex\`) and uncontrolled mode is not supported in \`Tabs\`.
For more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.`
    );
  }
};

export const Tabs: FunctionComponent<TabsProps> = ({
  children,
  defaultFocus = false,
  defaultIndex = null,
  focusTabOnClick = true,
  onSelect,
  ...props
}) => {
  const [focus, setFocus] = useState(defaultFocus);
  const [mode] = useState(getModeFromProps(props));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null
  );

  useEffect(() => {
    setFocus(false); // Reset focus after initial render, see comment above
  }, []);

  if (mode === MODE_UNCONTROLLED) {
    // Ensure that we handle removed tabs and don't let selectedIndex get out of bounds
    const tabsCount = getTabsCount(children);
    useEffect(() => {
      if (selectedIndex != null) {
        const maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }

  checkForIllegalModeChange(props, mode);

  const handleSelected = (index: number, last: number, event: Event) => {
    // Call change event handler
    if (typeof onSelect === "function") {
      // Check if the change event handler cancels the tab change
      if (onSelect(index, last, event) === false) return;
    }

    // Always set focus on tabs unless it is disabled
    if (focusTabOnClick) {
      setFocus(true);
    }

    if (mode === MODE_UNCONTROLLED) {
      // Update selected index
      setSelectedIndex(index);
    }
  };

  const subProps = {
    ...props,
    focus,
    onSelect: handleSelected,
    ...(selectedIndex != null ? { selectedIndex } : {}),
  };

  // @ts-ignore
  return <UncontrolledTabs {...subProps}>{children}</UncontrolledTabs>;
};

// @ts-ignore
Tabs.tabsRole = "Tabs";
