import React from 'react';

import {TextField} from "./TextField";

export default {
  title: 'Base/TextField',
  component: TextField
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Hello World !"
};
