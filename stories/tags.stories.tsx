import React from 'react';

import { Meta, Story } from '@storybook/react';


import TagsInput from "../src/components/tags";

const meta: Meta = {
    title: 'Basic elements/Tags',
    component: TagsInput,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => {
    return (
        <TagsInput {...args} />
    );
}

export const Default = Template.bind({});
Default.args = {
    tags: [],
    setTags: () => { },
    addTags: () => { },
    removeTags: () => { },
};