import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from './Button'

interface ButtonProps {
  color: 'Default' | 'Primary' | 'Success' | 'Warning' | 'Alert' | 'Disabled';
  size: 'Small' | 'Medium' | 'Large';
  theme: 'Light' | 'Dark';
  label: string;
  disabled: boolean;
}

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['Default', 'Primary', 'Success', 'Warning', 'Alert', 'Disabled'],
      control: { type: 'select' }
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' }
    },
    theme: {
      options: ['Light', 'Dark'],
      control: { type: 'radio' }
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'Default',
  theme: 'Light',
  label: 'Default',
  disabled: false,
  size: 'Small'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'Primary',
  theme: 'Light',
  label: 'Primary',
  disabled: false,
  size: 'Small'
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
  theme: 'Light',
  label: 'Success',
  disabled: false,
  size: 'Small'
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
  theme: 'Light',
  label: 'Warning',
  disabled: false,
  size: 'Small'
}

export const Alert = Template.bind({})
Alert.args = {
  color: 'Alert',
  theme: 'Light',
  label: 'Alert',
  disabled: false,
  size: 'Small'
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'Disabled',
  theme: 'Light',
  label: 'Disabled',
  disabled: true,
  size: 'Small'
}
