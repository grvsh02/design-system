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
    }
}