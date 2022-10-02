import React from 'react'

import { MenuList } from './MenuList'
import { MenuItem } from '../MenuItem/MenuItem'

export default {
  title: 'Base/MenuList',
  component: MenuList
}

const Template = (args :any) =>
    <MenuList {...args}>
      <MenuItem>About This Mac</MenuItem>
      <MenuItem>System Preferences...</MenuItem>
      <MenuItem>App Store...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Recent Items</MenuItem>
      <MenuItem>Force Quit...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Sleep</MenuItem>
      <MenuItem>Restart...</MenuItem>
      <MenuItem>Shutdown...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Lock Screen</MenuItem>
      <MenuItem>Log Out...</MenuItem>
    </MenuList>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  title: 'Apple Logo'
}
