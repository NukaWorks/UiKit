import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { AppActivity } from "../App/AppActivity";

const meta: Meta<typeof ProgressBar> = {
  title: "Base/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <AppActivity theme="Light" style={{ width: "300px" }}>
        <Story />
      </AppActivity>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
    showPercentage: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    label: "Downloading...",
    showPercentage: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Loading...",
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ProgressBar {...args} color="Default" value={40} label="Default" />
      <ProgressBar {...args} color="Primary" value={50} label="Primary" />
      <ProgressBar {...args} color="Success" value={60} label="Success" />
      <ProgressBar {...args} color="Warning" value={70} label="Warning" />
      <ProgressBar {...args} color="Alert" value={80} label="Alert" />
    </div>
  ),
  args: {
    showPercentage: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ProgressBar {...args} size="Small" value={60} label="Small" />
      <ProgressBar {...args} size="Medium" value={60} label="Medium" />
      <ProgressBar {...args} size="Large" value={60} label="Large" />
    </div>
  ),
  args: {
    showPercentage: true,
    color: "Primary",
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <ProgressBar
        value={progress}
        label="Auto-incrementing..."
        showPercentage
        color="Success"
      />
    );
  },
};
