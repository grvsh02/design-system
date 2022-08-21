import React from 'react';
import { Meta, Story } from '@storybook/react';

import NavBar from '../src/components/navbar';

const meta: Meta = {
    title: 'Navigation/Navbar',
    component: NavBar,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => (
    <NavBar {...args}/>
);

export const Default = Template.bind({});

Default.args = {}