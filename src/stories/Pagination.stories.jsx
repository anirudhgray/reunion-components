import React from 'react';

import { Pagination } from '../components/Pagination';

export default {
    title: 'Level One/Pagination',
    component: Pagination,
    argTypes: {
    },
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    page: 1
};
