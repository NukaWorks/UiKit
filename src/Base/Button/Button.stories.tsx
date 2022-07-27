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
