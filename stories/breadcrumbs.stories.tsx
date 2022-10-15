import React from "react";

import { Meta, Story } from '@storybook/react';

import Breadcrumbs from '../src/components/Breadcrumbs';
import {Router} from "react-router-dom";

const meta: Meta = {
    title: 'Basic elements/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        controls: { expanded: true },
    },
};


export default meta;


const Template: Story = args => {
return (
        <Breadcrumbs />
    );
};

export const Default = Template.bind({});
Default.args = {
}