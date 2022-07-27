import React from 'react'

import { Button } from './Button'
import { Application } from '../../Appl/Application/Application'

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['default', 'success', 'warning', 'alert'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args :any) =>
    <Application>
        <Button {...args} />
    </Application>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  color: 'default',
  theme: 'light',
  label: 'Default',
  size: 'small'
}

export const Success = Template.bind({})
// @ts-ignore
Success.args = {
  color: 'success',
  theme: 'light',
  label: 'Success',
  size: 'small'
}

export const Warning = Template.bind({})
// @ts-ignore
Warning.args = {
  color: 'warning',
  theme: 'light',
  label: 'Warning',
  size: 'small'
}

export const Alert = Template.bind({})
// @ts-ignore
Alert.args = {
  color: 'alert',
  theme: 'light',
  label: 'Alert',
  size: 'small'
}
