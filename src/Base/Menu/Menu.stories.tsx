import React from 'react'

import { Menu } from '../Menu/Menu'
import { MenuItem } from '../MenuItem'
import { MenuList } from '../MenuList'

export default {
  title: 'Base/Menu',
  component: Menu
}

const Template = (args :any) =>
    <Menu {...args}>
      <MenuList>
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
    </Menu>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  title: 'Apple Logo'
}
