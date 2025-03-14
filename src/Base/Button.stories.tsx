import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import '../Common/fonts.scss';

const meta: Meta<ButtonProps> = {
  title: "Base/Button",
  component: Button,
  argTypes: {
    color: {
      options: [
        "Default",
        "Primary",
        "Success",
        "Warning",
        "Alert",
        "Disabled",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["Small", "Medium", "Large"],
      control: { type: "select" },
    },
    theme: {
      options: ["Light", "Dark"],
      control: { type: "radio" },
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
    color: "Default",
    theme: "Light",
    label: "Default",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "Primary",
    theme: "Light",
    label: "Primary",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Success = {
  args: {
    color: "Success",
    theme: "Light",
    label: "Success",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Warning = {
  args: {
    color: "Warning",
    theme: "Light",
    label: "Warning",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Alert = {
  args: {
    color: "Alert",
    theme: "Light",
    label: "Alert",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Disabled = {
  args: {
    color: "Default",
    theme: "Light",
    label: "Disabled",
    disabled: true,
    size: "Small",
  },
} satisfies Story;

export default meta;
