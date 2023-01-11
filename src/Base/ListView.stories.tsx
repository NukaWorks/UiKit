import React from 'react'

import { ListView } from './ListView'

export default {
  title: 'Base/ListView',
  component: ListView
}

const Template = (args :any) => <ListView {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
