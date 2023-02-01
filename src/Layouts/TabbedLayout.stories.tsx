import React from 'react'

import { TabbedLayout } from './TabbedLayout'
import { TabPane } from './TabPane'

export default {
  title: 'Layouts/TabbedLayout',
  component: TabbedLayout
}

const Template = (args: any) => (
  <TabbedLayout defaultActiveKey={'1'} {...args}>
    <TabPane name={'Tab 1'} id={'1'}>Test</TabPane>
    <TabPane name={'Tab 2'} id={'1'}>Lol</TabPane>
  </TabbedLayout>
)


export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
