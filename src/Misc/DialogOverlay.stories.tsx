import React from 'react'

import { DialogOverlay } from './DialogOverlay'

export default {
  title: 'Misc/DialogOverlay',
  component: DialogOverlay
}

const Template = (args :any) => <DialogOverlay {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
