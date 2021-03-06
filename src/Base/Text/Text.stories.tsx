import React from 'react'

import { Text } from './Text'

export default {
  title: 'Base/Text',
  component: Text
}

const Template = (args :any) => <Text {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  text: 'Hello World !'
}
