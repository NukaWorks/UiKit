import React from 'react'

import { AppActivity } from './AppActivity'

export default {
  title: 'Appl/AppActivity',
  component: AppActivity
}

const Template = (args :any) => <AppActivity {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
