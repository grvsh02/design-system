import React from 'react';

import { Meta, Story, addDecorator } from '@storybook/react';
import Tabs from '../src/components/tabs';

const meta: Meta = {
    title: 'Basic Elements/Tabs',
    component: Tabs,
}

export default meta;

const Template: Story = args => (
    <Tabs {...args}/>

);

export const Default = Template.bind({});

Default.args = {
    items: [
        {
            label: 'All',
        },
        {
            label: 'Men',
        },
        {
            label: 'Women',
        },
        {
            label: 'Accessories',
        },
    ],
    onchange : (key: number) => {
        console.log(key)
    }
}