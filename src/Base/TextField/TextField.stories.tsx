import React from 'react'

import { TextField } from './TextField'

export default {
  title: 'Base/TextField',
  component: TextField
}

const Template = (args :any) => <TextField {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  placeholder: 'Hello World !'
}
