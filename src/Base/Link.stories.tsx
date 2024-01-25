import React from 'react'

import { Link, LinkProps } from './Link'

export default {
  title: 'Base/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    disabled: { control: 'boolean' }
  }
}

const Template = (args: LinkProps) => <Link {...args}>Hello World !</Link>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  href: 'https://nuka.works/',
  disabled: false
}
