import React from 'react';

import { Meta, Story} from '@storybook/react';
import Card from '../components/card';

const meta: Meta = {
    title: 'Basic Elements/Card',
    component: Card,
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
    <Card {...args}>
        {args.children}
        <Card>
            <h1>Child Card</h1>
            <Card>
                <h1>Grand Child Card</h1>
            </Card>
        </Card>
    </Card>
);

export const Default = Template.bind({});

Default.args = {
    title: 'Card Design',
    description: 'Your card description',
    className: 'm-10',
    background: ''
}


const DesignTemplate: Story = args => (
    <Card {...args}>
        {args.children}
    </Card>
);

export const Example_Design = DesignTemplate.bind({});

Example_Design.args = {
    title: 'Card Design',
    description: 'Your card description',
    className: 'px-20 py-12 m-10',
    background: '#F4694C'
};