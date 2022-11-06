import React from 'react'
import { Button } from './Button'

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
    label: { type: 'string' },
    disabled: { type: 'boolean' }
  }
}

const Template = (args :any) => <Button {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  color: 'Default',
  theme: 'Light',
  label: 'Default',
  disabled: false,
  size: 'Small'
}

export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
  color: 'Primary',
  theme: 'Light',
  label: 'Primary',
  disabled: false,
  size: 'Small'
}

export const Success = Template.bind({})
// @ts-ignore
Success.args = {
  color: 'Success',
  theme: 'Light',
  label: 'Success',
  disabled: false,
  size: 'Small'
}

export const Warning = Template.bind({})
// @ts-ignore
Warning.args = {
  color: 'Warning',
  theme: 'Light',
  label: 'Warning',
  disabled: false,
  size: 'Small'
}

export const Alert = Template.bind({})
// @ts-ignore
Alert.args = {
  color: 'Alert',
  theme: 'Light',
  label: 'Alert',
  disabled: false,
  size: 'Small'
}

export const Disabled = Template.bind({})
// @ts-ignore
Disabled.args = {
  color: 'Disabled',
  theme: 'Light',
  label: 'Disabled',
  disabled: true,
  size: 'Small'
}
