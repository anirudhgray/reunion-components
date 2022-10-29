import React from 'react';

import { Input } from '../components/Input';

export default {
    title: 'LevelOne/Input',
    component: Input,
    argTypes: {
    },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Email/Username",
    label: "Label"
};