import React from 'react'

import { HBox } from './HBox'

export default {
  title: 'Layouts/HBox',
  component: HBox
}

const Template = (args :any) => <HBox {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
