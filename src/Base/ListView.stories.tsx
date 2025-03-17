import React from "react";

import {ListView} from "./ListView";
import {LayoutProps} from "../Layouts/Layout";

import '../Common/fonts.scss';

export default {
    title: "Base/ListView",
    component: ListView,
};

const Template = (args: LayoutProps) => <ListView {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
