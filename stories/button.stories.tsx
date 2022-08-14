import React from 'react';

import { Meta, Story } from '@storybook/react';
import Button from '../src/components/button';

const meta: Meta = {
    title: 'Basic Elements/Button',
    component: Button,
    argTypes: {
        size: { control: { type: 'select', options: ['base', 'sm', 'xs'] } },
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
    <div className="flex justify-center items-center">
        <Button {...args}>
            {args.children}
        </Button>
    </div>
);

export const Default = Template.bind({});

Default.args = {
    label: "Shop Now",
    onClick: () => {},
    disabled : false,
    className: '',
    children: "Shop Now",
    size: 'base',
    iconProps: { icon: "Eye", type: "Bold" },
};