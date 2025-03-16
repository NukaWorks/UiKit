import React from "react";

import '../../Common/fonts.scss';
import {SimpleApp} from "./SimpleApp";

export default {
    title: "Examples/SimpleApp",
    component: SimpleApp,
    // argTypes: {
    //     closed: {control: "boolean"},
    // },
};

const Template = () => <SimpleApp/>;

export const Default = Template.bind({});
