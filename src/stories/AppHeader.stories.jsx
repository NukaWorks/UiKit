import React from 'react';

import { AppHeader } from '../appl/header/AppHeader';

export default {
  title: 'Appl/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AppHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
