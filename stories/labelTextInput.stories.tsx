import React from 'react';

import { Meta, Story } from '@storybook/react';
import LabelTextInput from '../src/components/labelTextInput';


const meta: Meta = {
    title: 'User Inputs/LabelTextInput',
    component: LabelTextInput,
    argTypes: {
        type: { control: { type: 'select', options: ['email', 'number', 'password', 'text','textarea','url'] } },
        placeholder: { control: { type: 'select', options: ['email', 'number', 'password', 'text','textarea','url'] } },
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

Default.args = {
    label: 'label',
    placeholder: 'email',
    value: '',
    onChange: () => {},
    charLimit: null,
    className: '',
    required: false,
    disabled: false,
    type:'',
    errorText: '',
    showCharLimit: false,
    showLimit: false,
};