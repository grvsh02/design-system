import React from 'react';
import { Meta, Story } from '@storybook/react';

import Home from '../src/components/carousel';

const meta: Meta = {
    title: 'Banners/ Carousel',
    component: Home,
    argTypes: {
        children: {
            control: {
                type: 'text',
            }
        }
    }
}

export default meta;

const Template: Story = args => (
    <div className="flex justify-center">
        <Home {...args}/>
    </div>
);

export const Default = Template.bind({});

Default.args = {
    data : [
        {
            id: 1,
            title: 'Pepe Jeans min 20% off',
            image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 2,
            title: 'Min 50% off on Apparels',
            image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 3,
            title: "All New Collection from Levi's",
            image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 4,
            title: 'Show Off your new Collection',
            image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }]
}