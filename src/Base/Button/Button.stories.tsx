import React from 'react'
import { Button } from './Button'

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['Default', 'Success', 'Warning', 'Alert'],
      control: { type: 'select' }
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' }
    },
    theme: {
      options: ['Light', 'Dark'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args :any) => <Button {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  color: 'Default',
  theme: 'Light',
  label: 'Default',
  size: 'Small'
}

export const Success = Template.bind({})
// @ts-ignore
Success.args = {
  color: 'Success',
  theme: 'Light',
  label: 'Success',
  size: 'Small'
}

export const Warning = Template.bind({})
// @ts-ignore
Warning.args = {
  color: 'Warning',
  theme: 'Light',
  label: 'Warning',
  size: 'Small'
}

export const Alert = Template.bind({})
// @ts-ignore
Alert.args = {
  color: 'Alert',
  theme: 'Light',
  label: 'Alert',
  size: 'Small'
}
