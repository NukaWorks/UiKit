import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { AppActivity } from "../App/AppActivity";
import { Button } from "./Button";
import { Text } from "./Text";

const meta: Meta<typeof Tooltip> = {
  title: "Base/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <AppActivity theme="Light">
        <div style={{ padding: "100px", display: "inline-block" }}>
          <Story />
        </div>
      </AppActivity>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button>Hover me</Button>,
    showArrow: true,
  },
};

export const WithoutArrow: Story = {
  args: {
    content: "This is a tooltip without an arrow",
    children: <Button>Hover me</Button>,
    showArrow: false,
  },
};

export const CustomArrow: Story = {
  args: {
    content: "Tooltip with custom arrow",
    children: <Button>Hover me</Button>,
    showArrow: true,
    arrowSize: 8,
  },
};

export const WithLongContent: Story = {
  args: {
    content:
      "This is a longer tooltip that might wrap to multiple lines if it exceeds the maximum width.",
    maxWidth: 200,
    children: <Button>Hover for long tooltip</Button>,
    showArrow: true,
  },
};

export const ArrowSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <Tooltip content="Small arrow" showArrow arrowSize={4}>
        <Button>Small</Button>
      </Tooltip>
      <Tooltip content="Default arrow" showArrow>
        <Button>Default</Button>
      </Tooltip>
      <Tooltip content="Large arrow" showArrow arrowSize={8}>
        <Button>Large</Button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "100px",
        gridTemplateColumns: "repeat(3, auto)",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div />
      <Tooltip content="Top tooltip" position="top" showArrow>
        <Button>Top</Button>
      </Tooltip>
      <div />
      <Tooltip content="Left tooltip" position="left" showArrow>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Center tooltip" showArrow>
        <Button>Center</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right" showArrow>
        <Button>Right</Button>
      </Tooltip>
      <div />
      <Tooltip content="Bottom tooltip" position="bottom" showArrow>
        <Button>Bottom</Button>
      </Tooltip>
      <div />
    </div>
  ),
};

export const WithCustomContent: Story = {
  args: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Text size={12} style={{ fontWeight: "bold" }}>
          Custom Tooltip
        </Text>
        <Text size={9}>
          This tooltip has custom styled content with multiple lines and
          formatting options.
        </Text>
      </div>
    ),
    children: <Button>Hover for custom content</Button>,
    showArrow: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <Tooltip
        content="This tooltip is controlled programmatically"
        show={show}
        showArrow
      >
        <Button onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide Tooltip" : "Show Tooltip"}
        </Button>
      </Tooltip>
    );
  },
};
