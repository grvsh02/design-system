import React from 'react';

import { Meta, Story } from '@storybook/react';
import VerticalTab from '../src/components/verticalTab';

const meta: Meta = {
    title: 'Basic Elements/Tabs',
    component: VerticalTab,
}

export default meta;

const Template: Story = args => (
    <VerticalTab {...args}/>

);

export const Default = Template.bind({});

Default.args = {
    className: 'w-56 h-52 ',
    items: [
        {
            label: 'Dashboard',
            icon: 'Dashboard',
            key: 'dashboard'
        },
        {
            label: 'Datasets',
            icon: 'DocumentMinimal',
            key: 'datasets'
        },
        {
            label: 'Training Jobs',
            icon: 'Flask',
            key: 'trainingJobs'
        },
        {
            label: 'Models',
            icon: 'Cluster',
            key: 'models'
        },
        {
            label: 'Pipelines',
            icon: 'Pipeline',
            key: 'pipelines'
        },
    ],
    onChange : (key: number) => {
        console.log("clicked index : ",key)
    }
}