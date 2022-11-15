import React from 'react'

import { SidebarItem } from './SidebarItem'

export default {
  title: 'Base/SidebarItem',
  component: SidebarItem
}

const Template = (args :any) => <SidebarItem {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
