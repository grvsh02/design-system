import React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox from "../src/components/checkbox";

const meta: Meta = {
    title: 'Selectors /checkbox',
    component: Checkbox,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => {

        return (
            <div className='bg-white flex pt-10 flex-col' style={{minHeight: "50vh"}}>
                <Checkbox {...args}/>
            </div>
        );
}

export const Default = Template.bind({});

Default.args = {}
