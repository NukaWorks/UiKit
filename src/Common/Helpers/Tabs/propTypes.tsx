import React from "react";

// Assuming these functions are correctly typed
import { deepForEach } from "./childrenDeepMap";
import { isTab, isTabList, isTabPanel } from "./elementTypes";

export function childrenPropType(
  props: { [key: string]: any },
  propName: string,
  componentName: string,
): Error | null {
  let error: Error | null = null;
  let tabsCount = 0;
  let panelsCount = 0;
  let tabListFound = false;
  const listTabs: React.ReactElement[] = [];
  const children = props[propName];

  deepForEach(children, (child) => {
    if (isTabList(child)) {
      if (
        child.props &&
        child.props.children &&
        typeof child.props.children === "object"
      ) {
        deepForEach(child.props.children, (listChild) =>
          listTabs.push(listChild),
        );
      }

      if (tabListFound) {
        error = new Error(
          "Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.",
        );
      }
      tabListFound = true;
    }
    if (isTab(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error(
          "Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " +
            "have to be inside the 'TabList' component.",
        );
      }
      tabsCount++;
    } else if (isTabPanel(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error(
      `There should be an equal number of 'Tab' and 'TabPanel' in \`${componentName}\`. ` +
        `Received ${tabsCount} 'Tab' and ${panelsCount} 'TabPanel'.`,
    );
  }

  return error;
}

export function onSelectPropType(
  props: { [key: string]: any },
  propName: string,
  componentName: string,
  location: string,
  propFullName?: string,
): Error | null {
  const prop = props[propName];
  const name = propFullName || propName;
  let error: Error | null = null;

  if (prop && typeof prop !== "function") {
    error = new Error(
      `Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied ` +
        `to \`${componentName}\`, expected \`function\`.`,
    );
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error(
      `The ${location} \`${name}\` is marked as required in \`${componentName}\`, but ` +
        "its value is `undefined` or `null`.\n" +
        "`onSelect` is required when `selectedIndex` is also set. Not doing so will " +
        "make the tabs not do anything, as `selectedIndex` indicates that you want to " +
        "handle the selected tab yourself.\n" +
        "If you only want to set the initial tab replace `selectedIndex` with `defaultIndex`.",
    );
  }

  return error;
}

export function selectedIndexPropType(
  props: { [key: string]: any },
  propName: string,
  componentName: string,
  location: string,
  propFullName?: string,
): Error | null {
  const prop = props[propName];
  const name = propFullName || propName;
  let error: Error | null = null;

  if (prop != null && typeof prop !== "number") {
    error = new Error(
      `Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to ` +
        `\`${componentName}\`, expected \`number\`.`,
    );
  } else if (props.defaultIndex != null && prop != null) {
    error = new Error(
      `The ${location} \`${name}\` cannot be used together with \`defaultIndex\` ` +
        `in \`${componentName}\`.\n` +
        `Either remove \`${name}\` to let \`${componentName}\` handle the selected ` +
        "tab internally or remove `defaultIndex` to handle it yourself.",
    );
  }

  return error;
}
