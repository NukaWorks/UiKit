import React from "react";

import { ListView, ListViewProps } from "./ListView";
import '../Common/fonts.scss';

export default {
  title: "Base/ListView",
  component: ListView,
};

const Template = (args: ListViewProps) => <ListView {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
