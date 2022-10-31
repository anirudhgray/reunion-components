import React from 'react';

import { StepNew } from '../components/StepNew';

export default {
    title: 'Level One/StepNew',
    component: StepNew,
    argTypes: {
    },
};

const Template = (args) => <StepNew {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    steps: ["Specify Preferences", "Verify Credentials", "Upload Excel"],
    currentStep: 2,
};
