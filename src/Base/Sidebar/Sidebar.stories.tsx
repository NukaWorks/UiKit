import React from 'react'

import { Sidebar } from './Sidebar'

export default {
  title: 'Base/Sidebar',
  component: Sidebar
}

const Template = (args :any) => <Sidebar {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
