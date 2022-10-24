import React from 'react';

import { Meta, Story } from '@storybook/react';

import Avatar from '../src/components/avatar';

const meta: Meta = {
    title: 'Basic elements /Avatar',
    component: Avatar,
    argTypes: {
        size: { control: { type: 'select', options: ['base' , 'sm' , 'xs'] } },
    }

}

export default meta;

const Template: Story = args => {

    return (
        <div>
            <Avatar size={args.size} {...args}/>
        </div>
    );
}

export const Default = Template.bind({});

Default.args = {
    imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    altColours: {
        fillColor: "#fde68ad9",
        textColor: "#f59e0bd9",
    },
    altText:{
        text: "Lorem Ipsum",
    },
    onClick: () => {
        console.log("clicked");
    }
}