import React from 'react'

import { TabbedLayout } from './TabbedLayout'
import { Tab } from './Tab'

export default {
  title: 'Layouts/TabbedLayout',
  component: TabbedLayout
}

const Template = (args: any) => (
  <TabbedLayout defaultActiveKey={'1'} {...args}>
    <Tab name={'Tab 1'} id={'1'}>Test</Tab>
    <Tab name={'Tab 2'} id={'1'}>Lol</Tab>
  </TabbedLayout>
)


export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
