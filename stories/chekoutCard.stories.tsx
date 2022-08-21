import React from 'react';

import { Meta, Story} from '@storybook/react';
import CheckoutCard from '../src/components/checkoutCard';

const meta: Meta = {
    title: 'Product/Checkout Card',
    component: CheckoutCard,
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
    <div className="bg-white">
        <CheckoutCard {...args}/>
    </div>
);

export const Default = Template.bind({});

Default.args = {
    name: 'Louis Vuitton Round Neck Top',
    price: '2050',
    brand: 'Lois Vuitton',
    productProps: {
        rating: 4,
        strikePrice: '2250',
        colorOptions: ["Red", "Blue", "Green"],
        sizeOptions: ["S", "M", "L", "XL"],
    },
    size: "S",
    quantity: 1,
    sizesAvailable: [
        {"name": "S"},
        {"name": "M"},
        {"name": "L"},
        {"name": "XL"},
    ],
    maxQuantity: 10,
}