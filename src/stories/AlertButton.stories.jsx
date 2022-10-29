import React from 'react';

import { AlertButton } from '../components/AlertButton';

export default {
    title: 'Example/AlertButton',
    component: AlertButton,
    argTypes: {
    },
};

const Template = (args) => <AlertButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Project Alerts",
    description: "WhatsApp notifications for legal, sales,construction, technical updates."
};
