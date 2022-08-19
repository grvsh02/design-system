import React from 'react';

import { Meta, Story } from '@storybook/react';
import Button from '../src/components/button';

const meta: Meta = {
    title: 'Basic Elements/Button',
    component: Button,
    argTypes: {
        size: { control: { type: 'select', options: ['base', 'sm', 'xs'] } },
        type: { control: { type: 'select', options: ['primary', 'secondary', "basic", "selected"] } },
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
    iconProps: { icon: "ShoppingCart", type: "Bold" },
};

const vars : Story = args => (
    <div className="flex justify-center items-center">
        <Button {...args}>
            {args.children}
        </Button>
    </div>
);

export const variants = vars.bind({});

variants.args = {
    label: "Shop Now",
    onClick: () => {},
    disabled : false,
    className: '',
    children: "Shop Now",
    size: 'base',
};

const disabled : Story = args => (
    <div className="flex justify-center items-center">
        <Button {...args}>
            {args.children}
        </Button>
    </div>
);

export const Disabled = disabled.bind({});

Disabled.args = {
    label: "Shop Now",
    onClick: () => {},
    disabled : true,
    className: '',
    children: "Shop Now",
    size: 'base',
};

