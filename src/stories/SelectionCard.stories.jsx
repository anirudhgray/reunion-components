import React from 'react';

import { SelectionCard } from '../components/SelectionCard';

export default {
    title: 'Level One/SelectionCard',
    component: SelectionCard,
    argTypes: {
    },
};

const Template = (args) => <SelectionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Project Alerts",
    description: "WhatsApp notifications for legal, sales,construction, technical updates."
};
