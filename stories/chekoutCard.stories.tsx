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
    <CheckoutCard {...args}/>
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
    }
}