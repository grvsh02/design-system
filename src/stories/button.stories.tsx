import React from 'react';

import { Meta, Story } from '@storybook/react';
import Button from '../components/button';

const meta: Meta = {
    title: 'Basic Elements/Button',
    component: Button,
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
    <div className="flex justify-center items-center">
        <Button {...args}>
            {args.children}
        </Button>
    </div>
);

export const Default = Template.bind({});

Default.args = {
    label: "Press here",
    onClick: () => {},
    disabled : false,
    className: 'px-2 py-3',
    children: "Press here",
    size: 'm',
};