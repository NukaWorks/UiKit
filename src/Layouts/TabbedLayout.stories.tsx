import React from 'react'
import { TabbedLayout } from './TabbedLayout'
import { TabPane } from './TabPane'
import { StackLayout } from './StackLayout'
import { TabBar } from '../Appl/TabBar'

export default {
  title: 'Layouts/TabbedLayout',
  component: TabbedLayout
}

const Template = (args: any) => {
  return (
      <StackLayout direction={'Vertical'}>
        <TabBar/>
        <TabbedLayout defaultActiveKey={'1'} {...args}>
          <TabPane name={'Tab 1'} tabKey={'1'}>Test</TabPane>
          <TabPane name={'Tab 2'} tabKey={'2'}>Lol</TabPane>
        </TabbedLayout>
      </StackLayout>
  )
}

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
