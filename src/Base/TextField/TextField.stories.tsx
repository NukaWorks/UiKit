import React from 'react'

import { TextField } from './TextField'

export default {
  title: 'Base/TextField',
  component: TextField,
  argTypes: {
    placeholder: { type: 'string' },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      control: { type: 'select' }
    },
    disabled: { control: 'boolean' }
  }
}

const Template = (args :any) => <TextField {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  placeholder: 'Hello World !',
  type: 'text',
  disabled: false
}
