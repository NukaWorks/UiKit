import React from 'react';

import {Button} from './Button';
import {Application} from "../../Appl/Application/Application";

export default {
    title: 'Base/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) =>
    <Application>
        <Button {...args} />
    </Application>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
    size: 'small',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
