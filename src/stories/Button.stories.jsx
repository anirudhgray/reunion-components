import React from 'react';

import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Level Zero/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    mode: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['filled', 'outline', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  mode: 'danger',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  mode: 'secondary'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
}

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
}
