import React from 'react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Combined',
    component: Navbar,
    subcomponents: { Button }
    // argTypes: {
    //     end: { control: 'string' }
    // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div className="">
    <Navbar {...args} />
    <Button></Button>
</div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    navItems: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "AryaBot", path: "/aryabot" }, { name: "About Us", path: "/about" }, { name: "Contact Us", path: "/contact" }],
    end: "Login",
    start: "https://softr-prod.imgix.net/applications/c894b09d-a577-43c3-ba03-472ba216b6b2/assets/9f0fb6a5-8ca4-4fa2-9678-50b4195afa26.png"
}
