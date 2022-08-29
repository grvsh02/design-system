import React from "react";
import  Avatar from '../src/components/avatar';
import { Meta, Story } from "@storybook/react";
const meta: Meta = {
    title: "Basic Elements/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            control: {
                type: "select",
            },
            options: ["small", "medium", "large"],
        },
},
};
export default meta;

let Template: Story = args => (
    <div className="flex justify-center items-center">
        <Avatar {...args}/>
    </div>
        )
        export const Default = Template.bind({});
        Default.args = {
            size: "medium",
            children: "AA",
        };