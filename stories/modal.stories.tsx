import React from 'react';
import { Meta, Story } from '@storybook/react';

import Modal from '../src/components/modal';
import Button from "../src/components/button";

const meta: Meta = {
    title: 'Basic elements/Modal',
    component: Modal,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleDelete = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-2xl font-semibold">Delete Candidate</div>
                <div className="text-lg mt-5">Are you sure you want to delete this Candidate?</div>
                <div className="flex justify-end mt-10">
                    <Button className="mr-5" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="selected" onClick={() => {handleDelete()}}>Delete</Button>
                </div>
            </Modal>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {}