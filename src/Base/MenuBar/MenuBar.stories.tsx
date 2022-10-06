import React from 'react'

import { MenuBar } from './MenuBar'

export default {
  title: 'Base/MenuBar',
  component: MenuBar
}

const Template = (args :any) => <MenuBar {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
