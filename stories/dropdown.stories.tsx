import React from 'react';

import { Meta, Story } from '@storybook/react';
import Dropdown from '../src/components/dropdown';


const meta: Meta = {
    title: 'Selectors /Dropdown',
    component: Dropdown,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => {

    return (
        <div className='bg-white flex pt-10 flex-col' style={{minHeight: "50vh"}}>
            <Dropdown {...args}/>
        </div>
    )};

export const Default = Template.bind({});

Default.args = {
    showOnHover: false,
    label: 'Label',
    placeholder: 'Select an option',
    className: "w-1/3",
    items: [
        {
            'name': 'Item 1',
            onSelect: () => {
                // setIsOpen(false);
            }
        },
        {
            'name': 'Item 3',
            onSelect: () => {}
        },
        {
            'name': 'Item 4',
            onSelect: () => {},
        },
    ]
};
