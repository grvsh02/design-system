import React from 'react';

import { Meta, Story } from '@storybook/react';
import LabelTextInput from '../src/components/labelTextInput';

const meta: Meta = {
    title: 'User Inputs/LabelTextInput',
    component: LabelTextInput,
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
    <LabelTextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {};