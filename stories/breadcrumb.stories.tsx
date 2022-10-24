import React from 'react';
import { Meta, Story } from '@storybook/react';
import  Breadcrumb  from '../src/components/breadcrumb';


const meta: Meta = {
    title: 'Basic Elements/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-30" style={{minHeight: '25vh'}}>
        <Breadcrumb items={args.items} {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    items: [
        {key:"basic_details",title:"Basic details"},
        {key:"upload_method",title:"Upload Method"},
    ],
    onClick: (key: string) => {
        console.log("clicked index : ",key)
    },
    homeIcon: {
        key: "home",
        icon: "Dashboard"
    }
}