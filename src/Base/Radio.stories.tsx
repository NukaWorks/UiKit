import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";
import { AppActivity } from "../App/AppActivity";
import { Text } from "../Base/Text";
import "../Common/fonts.scss";

const meta: Meta<typeof Radio> = {
  title: "Base/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the radio is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Default Radio",
    color: "Default",
    size: "Small",
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Radio",
    color: "Primary",
    size: "Small",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    label: "Success Radio",
    color: "Success",
    size: "Small",
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Radio",
    color: "Warning",
    size: "Small",
    disabled: false,
  },
};

export const Alert: Story = {
  args: {
    label: "Alert Radio",
    color: "Alert",
    size: "Small",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio",
    color: "Disabled",
    disabled: true,
    size: "Small",
  },
};

export const Sizes: Story = {
  render: () => {
    const [smallOption, setSmallOption] = useState("option1");
    const [mediumOption, setMediumOption] = useState("option1");
    const [largeOption, setLargeOption] = useState("option1");

    const handleSmallChange = (value: string) => setSmallOption(value);
    const handleMediumChange = (value: string) => setMediumOption(value);
    const handleLargeChange = (value: string) => setLargeOption(value);

    return (
      <AppActivity
        theme="Light"
        direction="Vertical"
        style={{ padding: "16px", gap: "24px" }}
      >
        <div>
          <Text size={16}>Small Size</Text>
          <RadioGroup
            name="small-size-demo"
            value={smallOption}
            onChange={handleSmallChange}
          >
            <Radio
              label="Option One"
              value="option1"
              size="Small"
              color="Primary"
            />
            <Radio
              label="Option Two"
              value="option2"
              size="Small"
              color="Primary"
            />
            <Radio
              label="Option Three"
              value="option3"
              size="Small"
              color="Primary"
            />
          </RadioGroup>
        </div>

        <div>
          <Text size={16}>Medium Size</Text>
          <RadioGroup
            name="medium-size-demo"
            value={mediumOption}
            onChange={handleMediumChange}
          >
            <Radio
              label="Option One"
              value="option1"
              size="Medium"
              color="Success"
            />
            <Radio
              label="Option Two"
              value="option2"
              size="Medium"
              color="Success"
            />
            <Radio
              label="Option Three"
              value="option3"
              size="Medium"
              color="Success"
            />
          </RadioGroup>
        </div>

        <div>
          <Text size={16}>Large Size</Text>
          <RadioGroup
            name="large-size-demo"
            value={largeOption}
            onChange={handleLargeChange}
          >
            <Radio
              label="Option One"
              value="option1"
              size="Large"
              color="Warning"
            />
            <Radio
              label="Option Two"
              value="option2"
              size="Large"
              color="Warning"
            />
            <Radio
              label="Option Three"
              value="option3"
              size="Large"
              color="Warning"
            />
          </RadioGroup>
        </div>

        <div style={{ marginTop: "16px" }}>
          <Text size={12} style={{ fontWeight: "bold" }}>
            Selected Options:
          </Text>
          <Text size={12}>Small: {smallOption}</Text>
          <Text size={12}>Medium: {mediumOption}</Text>
          <Text size={12}>Large: {largeOption}</Text>
        </div>
      </AppActivity>
    );
  },
};

const RadioGroupExample = () => {
  const [verticalValue, setVerticalValue] = useState("option1");
  const [horizontalValue, setHorizontalValue] = useState("option1");

  return (
    <AppActivity theme="Light" direction="Vertical" style={{ padding: "16px" }}>
      <Text size={16}>Vertical Group (Default)</Text>
      <RadioGroup
        name="group1"
        value={verticalValue}
        onChange={setVerticalValue}
      >
        <Radio label="Option 1" value="option1" color="Primary" size="Small" />
        <Radio label="Option 2" value="option2" color="Primary" size="Small" />
        <Radio label="Option 3" value="option3" color="Primary" size="Small" />
      </RadioGroup>

      <Text size={16}>Horizontal Group</Text>
      <RadioGroup
        name="group2"
        value={horizontalValue}
        onChange={setHorizontalValue}
        direction="horizontal"
      >
        <Radio label="Option 1" value="option1" color="Success" size="Small" />
        <Radio label="Option 2" value="option2" color="Success" size="Small" />
        <Radio label="Option 3" value="option3" color="Success" size="Small" />
      </RadioGroup>

      <div style={{ marginTop: "16px" }}>
        <Text size={12}>Vertical: {verticalValue}</Text>
        <Text size={12}>Horizontal: {horizontalValue}</Text>
      </div>
    </AppActivity>
  );
};

export const Groups: Story = {
  render: () => <RadioGroupExample />,
};
