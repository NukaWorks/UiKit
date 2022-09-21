import React from 'react'

import { Test } from './Test'

export default {
  title: 'Category/Test',
  component: Test
}

const Template = (args :any) => <Test {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
