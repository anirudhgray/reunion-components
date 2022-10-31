import React from 'react';

import { AlertResults } from '../components/AlertResults';

export default {
    title: 'Example/AlertResults',
    component: AlertResults,
    argTypes: {
    },
};

const Template = (args) => <AlertResults {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            id: "P51700019505",
            name: "Hiranandani Meadows",
            owner: "Hiranandani Properties Private Limited",
            address: "Thane West, Eastern Express Highway-Thane, Thane"
        },
        {
            id: "P51700019505",
            name: "Hiranandani Meadows",
            owner: "Hiranandani Properties Private Limited",
            address: "Thane West, Eastern Express Highway-Thane, Thane"
        },
        {
            id: "P51700019505",
            name: "Hiranandani Meadows",
            owner: "Hiranandani Properties Private Limited",
            address: "Thane West, Eastern Express Highway-Thane, Thane"
        }
    ]
};
