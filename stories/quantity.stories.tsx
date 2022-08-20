import React from 'react';

import { Meta, Story } from '@storybook/react';
import QuantityInput from "../src/components/quantity";

const meta: Meta = {
    title: 'User Inputs/Quantity Input',
    component: QuantityInput,
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
    <QuantityInput label="Quantity" {...args} />
);

export const Default = Template.bind({});

Default.args = {};
