import React from 'react';

import { Meta, Story, addDecorator } from '@storybook/react';

import Banner from '../src/components/Banner';

const meta: Meta = {
    title: 'Banners/ Banner',
    component: Banner,
};

export default meta;

const Template: Story = args => (
    <Banner {...args}/>
);

export const Default = Template.bind({});

Default.args = {
    imgUrl: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    text: "Wrist Watch",
    category: "Accessories",
    className: "",
}
