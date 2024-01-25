import React from 'react'
import { AppHeader, AppHeaderProps } from './AppHeader'
import { MenubarTest } from '../Base/MenuBar.stories'

export default {
  title: 'Appl/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: { type: 'string' }
  }
}

const Template = (args: AppHeaderProps) => <AppHeader {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  title: 'Hello World !'
}

const AppBarExample = (args: any) => (
  <AppHeader {...args}>
    <MenubarTest/>
  </AppHeader>
)

export const AppBar = AppBarExample.bind({})
// @ts-ignore
AppBar.args = {
  title: 'Storybook'
}
