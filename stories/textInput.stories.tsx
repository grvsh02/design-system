import React from 'react';

import { Meta, Story } from '@storybook/react';
import IconTextInput from '../src/components/IconTextInput';

const meta: Meta = {
    title: 'User Inputs/Text Input',
    component: IconTextInput,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => (
    <IconTextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {};