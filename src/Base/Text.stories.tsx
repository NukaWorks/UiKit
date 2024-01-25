import React from 'react'

import { Text, TextProps } from './Text'

export default {
  title: 'Base/Text',
  component: Text,
  argTypes: {
    text: { type: 'string' },
    disabled: { control: 'boolean' }
  }
}

const Template = (args: TextProps) => <Text {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  text: 'Hello World !',
  disabled: false
}
