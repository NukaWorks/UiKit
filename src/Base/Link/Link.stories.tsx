import React from 'react'

import { Link } from './Link'

export default {
  title: 'Base/Link',
  component: Link
}

const Template = (args :any) => <Link {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
