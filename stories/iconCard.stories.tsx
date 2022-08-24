import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconCard from "../src/components/iconCard";

const meta: Meta = {
    title: 'Product/Icon Card',
    component: IconCard,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
}

export default meta;

const Template: Story = args => (
    <div className="flex justify-center">
        <IconCard text="XL" />
        <IconCard icon="Heart" />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    text: 'XL',
    icon: 'Heart',
};
