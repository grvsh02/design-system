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
                <h1>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Sed tempus consequat gravida.
                    Quisque convallis iaculis aliquet.
                    Pellentesque nec eros lorem.
                    Nulla et sapien auctor, fermentum libero id, ultrices mi.
                    Donec bibendum nibh quam, et volutpat ex aliquet eu. Duis id consectetur nunc.
                    Vestibulum at aliquet elit, eget gravida nisi.
                    Etiam sit amet lacus molestie, molestie ligula non, congue nunc. Morbi quam ante, porta non neque a, ultrices laoreet purus.
                    Nunc ultricies augue est, id tincidunt justo porttitor vitae. Curabitur consequat urna non bibendum aliquam.

                </h1>
            </Modal>
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
    onClick: () => {},

}