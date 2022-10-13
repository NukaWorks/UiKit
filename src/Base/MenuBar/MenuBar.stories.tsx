import React from 'react'

import { MenuBar } from './MenuBar'
import { Menu } from '../Menu/Menu'
import { MenuList } from '../MenuList/MenuList'
import { MenuItem } from '../MenuItem/MenuItem'

export default {
  title: 'Base/MenuBar',
  component: MenuBar
}

const Template = (args :any) => <MenuBar {...args}>
  <Menu title={'File'}>
    <MenuList>
      <MenuItem>New File...</MenuItem>
      <MenuItem>Open...</MenuItem>
      <MenuItem>Quit</MenuItem>
    </MenuList>
  </Menu>

  <Menu title={'Edit'}>
    <MenuList>
      <MenuItem>Undo Action</MenuItem>
      <MenuItem>Redo Action</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </MenuList>
  </Menu>

  <Menu title={'Tools'}>
    <MenuList>
      <MenuItem>Refresh</MenuItem>
    </MenuList>
  </Menu>

  <Menu title={'Help'}>
    <MenuList>
      <MenuItem>Get Help on GitHub...</MenuItem>
      <MenuItem>About...</MenuItem>
    </MenuList>
  </Menu>
</MenuBar>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
