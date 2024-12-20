import { Children, cloneElement, ReactElement } from "react";
import { isTab, isTabList, isTabPanel } from "./elementTypes";

function isTabChild(child: any) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

export function deepMap(
  children: ReactElement,
  callback: (child: ReactElement) => ReactElement
) {
  return Children.map(children, (child: ReactElement): ReactElement | null => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (
      child.props &&
      child.props.children &&
      typeof child.props.children === "object"
    ) {
      // Clone the child that has children and map them too
      return cloneElement(child, {
        ...child.props,
        children: deepMap(child.props.children, callback),
      });
    }

    return child;
  });
}

export function deepForEach(children: any, callback: (child: any) => void) {
  return Children.forEach(children, (child) => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (
      child.props &&
      child.props.children &&
      typeof child.props.children === "object"
    ) {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}
