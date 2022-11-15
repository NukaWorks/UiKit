import React from 'react'

import { Separator } from './Separator'

export default {
  title: 'Misc/Separator',
  component: Separator
}

const Template = (args :any) => <Separator {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
