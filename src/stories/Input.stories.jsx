import React from 'react';

import { Input } from '../components/Input';

export default {
    title: 'Level Zero/Input',
    component: Input,
    argTypes: {
        type: {
            options: ['text', 'number', 'otp', 'password', 'email', 'time', 'url', 'tel'],
            control: { type: 'radio' }
        }
    },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Email/Username",
    label: "Label"
};
