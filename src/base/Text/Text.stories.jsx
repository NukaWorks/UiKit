import React from 'react';

import { Text } from './Text';

export default {
  title: 'Base/Text',
  component: Text
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Hello World !"
};
