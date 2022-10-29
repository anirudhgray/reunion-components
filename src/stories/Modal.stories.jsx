import React from 'react';

import { Modal } from '../components/Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        theme: {
            options: ['error', 'success', 'default'],
            control: { type: 'radio' }
        },
    },
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title Here",
    description: "Seems like you did not fill Cell “C7” & “D4” in the excel sheet.\nPlease fill the mentioned Cells and try uploading again.",
    buttons: "Okay",
    theme: "default"
};
