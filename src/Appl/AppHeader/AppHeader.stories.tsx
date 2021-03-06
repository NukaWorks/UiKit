import React from 'react'

import { AppHeader } from './AppHeader'

export default {
  title: 'Appl/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args :any) => <AppHeader {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
