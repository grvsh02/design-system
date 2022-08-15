import React from 'react';

import { Meta, Story} from '@storybook/react';
import Card from '../src/components/card';

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
    </Card>
);

export const Default = Template.bind({});

Default.args = {
    title: 'Card Design',
    description: 'Your card description',
    className: 'm-10',
    background: '#F4694C',
}


const DesignTemplate: Story = args => (
    <div className="flex justify-center">
        <Card background='#F4694C' {...args}>
            <Card className="m-3 pt-5 border border-white" background="#F4694C">
                <h3 className="text-center text-white font-semibold text-2xl">Free Return</h3>
                <p className="text-center text-white font-light pt-2">Free 30 days return policy</p>
            </Card>
        </Card>
        <Card background='#092C4C' {...args} >
            <Card className="m-3 pt-5 border border-white" background="#092C4C">
                <h3 className="text-center text-white font-semibold text-2xl">Free Shipping</h3>
                <p className="text-center text-white font-light pt-2">on orders above Rs.500</p>
            </Card>
        </Card>
    </div>
);

export const Example_Design = DesignTemplate.bind({});

Example_Design.args = {
    className: 'w-1/3 m-2',
};