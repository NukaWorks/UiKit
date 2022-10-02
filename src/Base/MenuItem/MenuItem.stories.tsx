import React from 'react'

import { MenuItem } from './MenuItem'

export default {
  title: 'Base/MenuItem',
  component: MenuItem
}

const Template = (args :any) => <MenuItem {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
