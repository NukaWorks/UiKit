import React from 'react'

import { Button } from './Button'
import { Application } from '../../Appl/Application/Application'

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args :any) =>
    <Application>
        <Button {...args} />
    </Application>

export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
  size: 'small'
}

export const Secondary = Template.bind({})
// @ts-ignore
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
// @ts-ignore
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
// @ts-ignore
Small.args = {
  size: 'small',
  label: 'Button'
}

export const Medium = Template.bind({})
// @ts-ignore
Medium.args = {
  size: 'medium',
  label: 'Button'
}
