import React from 'react';

import { Meta, Story} from '@storybook/react';
import ProductCard from '../src/components/productCard';

const meta: Meta = {
    title: 'Product/Product Card',
    component: ProductCard,
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
    <ProductCard {...args}/>
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
    imgUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80"
}