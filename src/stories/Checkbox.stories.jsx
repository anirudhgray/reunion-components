import React from 'react';

import { Checkbox } from '../components/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
};
