import React from 'react'

import { Sidebar } from './Sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export default {
  title: 'Base/Sidebar',
  component: Sidebar
}

const Template = (args :any) => <Sidebar {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}

const TestTemplate = (args :any) => <Sidebar {...args}>
    <SidebarItem icon={'home'} text={'Home'} />
    <SidebarItem icon={'inventory_2'} text={'Packages'} />
    <SidebarItem icon={'terminal'} text={'Console Management'} />
    <SidebarItem icon={'settings'} text={'Settings'} />
    <SidebarItem icon={'info'} text={'About'} />
</Sidebar>

export const Tests = TestTemplate.bind({})
// @ts-ignore
Tests.args = {}
