import React from 'react';

import { Tag } from '../components/Tag';

export default {
    title: 'Level Zero/Tag',
    component: Tag,
    argTypes: {
    },
};

const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
