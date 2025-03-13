import React from "react";

import { TextField, TextFieldProps } from "./TextField";
import '../Common/fonts.scss';

export default {
  title: "Base/TextField",
  component: TextField,
  argTypes: {
    placeholder: { type: "string" },
    type: {
      options: ["text", "password", "email", "number", "tel", "url"],
      control: { type: "select" },
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

const Template = (args: TextFieldProps) => <TextField {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  placeholder: "Hello World !",
  type: "text",
  disabled: false,
  invalid: false,
};
