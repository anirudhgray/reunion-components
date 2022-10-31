import React from 'react';

import { Step } from '../components/Step';

export default {
    title: 'Level One/Step',
    component: Step,
    argTypes: {
    },
};

const Template = (args) => <Step {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    steps: ["Specify Preferences", "Verify Credentials", "Upload Excel", "Status Update"]
};
