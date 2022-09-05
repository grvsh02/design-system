import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal from "../src/components/modal";

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
            <button onClick={() => setIsOpen(true)}>
                open
            </button>
            <Modal isOpen={isOpen}>
                <h1>hello world</h1>
            </Modal>
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
}