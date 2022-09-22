import React from 'react'

import { MenuList } from './MenuList'

export default {
  title: 'Base/MenuList',
  component: MenuList
}

const Template = (args :any) => <MenuList {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
