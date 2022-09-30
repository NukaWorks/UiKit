import React from 'react'

import { AppHeader } from './AppHeader'

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

const Template = (args :any) => <AppHeader {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  title: 'Hello World !'
}
