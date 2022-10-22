import React from 'react'

import { Spinner } from './Spinner'

export default {
  title: 'Misc/Spinner',
  component: Spinner
}

const Template = (args :any) => <Spinner {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
