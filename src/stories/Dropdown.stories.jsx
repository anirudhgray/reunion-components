import React from 'react';

import { Dropdown } from '../components/Dropdown';

export default {
    title: 'LevelOne/Dropdown',
    component: Dropdown,
    argTypes: {
    },
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Select an Option",
    label: "Label",
    options: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
};
