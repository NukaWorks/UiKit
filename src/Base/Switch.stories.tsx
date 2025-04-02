import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { AppActivity } from "../App/AppActivity";
import { Text } from "./Text";

const meta: Meta<typeof Switch> = {
  title: "Base/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <AppActivity theme="Light">
        <Story />
      </AppActivity>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: "Small",
    color: "Primary",
    children: <Text size={9}>Toggle me</Text>,
  },
};

export const WithColors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch {...args} color="Default">
        <Text size={9}>Default</Text>
      </Switch>
      <Switch {...args} color="Primary">
        <Text size={9}>Primary</Text>
      </Switch>
      <Switch {...args} color="Success">
        <Text size={9}>Success</Text>
      </Switch>
      <Switch {...args} color="Warning">
        <Text size={9}>Warning</Text>
      </Switch>
      <Switch {...args} color="Alert">
        <Text size={9}>Alert</Text>
      </Switch>
    </div>
  ),
  args: {
    checked: true,
    disabled: false,
  },
};

export const WithSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch {...args} size="Small">
        <Text size={9}>Small Switch</Text>
      </Switch>
      <Switch {...args} size="Medium">
        <Text size={9}>Medium Switch</Text>
      </Switch>
      <Switch {...args} size="Large">
        <Text size={9}>Large Switch</Text>
      </Switch>
    </div>
  ),
  args: {
    checked: false,
    disabled: false,
    color: "Primary",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch {...args} checked={false}>
        <Text size={9}>Disabled Unchecked</Text>
      </Switch>
      <Switch {...args} checked={true}>
        <Text size={9}>Disabled Checked</Text>
      </Switch>
    </div>
  ),
  args: {
    disabled: true,
    color: "Primary",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);

    useEffect(() => {
      setChecked(args.checked ?? false);
    }, [args.checked]);

    return (
      <Switch {...args} checked={checked} onChange={setChecked}>
        <Text size={9}>{checked ? "On" : "Off"}</Text>
      </Switch>
    );
  },
  args: {
    checked: false,
    disabled: false,
    size: "Small",
    color: "Primary",
  },
};
