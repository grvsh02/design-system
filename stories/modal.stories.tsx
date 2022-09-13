import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal from "../src/components/modal";
import Button from "../src/components/button";

const meta: Meta = {
    title: 'Basic elements/Modal',
    component: Modal,
}

export default meta;

const Template: Story = args => {

    const [isOpen, setIsOpen] = React.useState(args.isOpen);

    React.useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>open </button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-2xl font-semibold">Delete Item</div>
                <div className="text-lg mt-5">Are you sure you want to delete this item?</div>
                <div className="flex justify-end mt-5">
                    <Button className="mr-5" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="selected">Delete</Button>
                </div>
            </Modal>
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
    onClick: () => {},

}