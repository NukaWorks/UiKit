import React from 'react'

import { Button } from './Button'
import { Application } from '../../Appl/Application/Application'

export default {
  title: 'Base/Button',
  component: Button
}

const Template = (args :any) =>
    <Application>
        <Button {...args} />
    </Application>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  color: 'default',
  label: 'Default',
  size: 'small'
}

export const Success = Template.bind({})
// @ts-ignore
Success.args = {
  color: 'success',
  label: 'Success',
  size: 'small'
}

export const Alert = Template.bind({})
// @ts-ignore
Alert.args = {
  color: 'alert',
  label: 'Alert',
  size: 'small'
}

export const Warning = Template.bind({})
// @ts-ignore
Warning.args = {
  color: 'warning',
  label: 'Warning',
  size: 'small'
}
