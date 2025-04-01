import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { AppActivity } from "../App/AppActivity";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    color: "Default",
    size: "Small",
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Checkbox",
    color: "Primary",
    size: "Small",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    label: "Success Checkbox",
    color: "Success",
    size: "Small",
    checked: true,
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Checkbox",
    color: "Warning",
    size: "Small",
    disabled: false,
  },
};

export const Alert: Story = {
  args: {
    label: "Alert Checkbox",
    color: "Alert",
    size: "Small",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    color: "Disabled",
    disabled: true,
    size: "Small",
  },
};

export const Sizes: Story = {
  render: () => (
    <AppActivity
      theme={"Light"}
      direction="Vertical"
      style={{ padding: "16px" }}
    >
      <Checkbox label="Small Checkbox" size="Small" disabled={false} />
      <Checkbox label="Medium Checkbox" size="Medium" disabled={false} />
      <Checkbox label="Large Checkbox" size="Large" disabled={false} />
    </AppActivity>
  ),
};
