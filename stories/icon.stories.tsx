import { Meta, Story} from '@storybook/react';
import Icon from '../src/components/icon';
import {
    AddSquare,
    ArrowDown,
    ArrowLeft,
    ArrowRight, ArrowSquareLeft, ArrowSquareRight,
    ArrowUp,
    Category,
    CloseCircle,
    Eye,
    Frame,
    Heart, MinusSquare,
    SearchNormal,
    ShoppingCart,
    SmsTracking,
    Sort, TickSquare,
    Trash
} from "../src/icons/Bold";

const meta: Meta = {
    title: 'Basic Elements/Icon',
    component: Icon,
    argTypes: {
        icon : { control: { type: 'select', options: ["Eye", "Trash", "Sort", "CloseCircle", "SearchNormal", "SmsTracking", "Heart", "Frame", "Category", "ShoppingCart", "ArrowUp", "ArrowRight", "ArrowSquareRight", "ArrowSquareLeft", "ArrowLeft", "ArrowDown", "TickSquare", "MinusSquare", "AddSquare"] } },
        size: { control: { type: 'select', options: ["base", "sm", "xs"] } },
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => (
    <Icon fill={args.fill} stroke={args.stroke} icon={args.icon} size={args.size} />
);

export const Default = Template.bind({});

Default.args = {
    fill: '#F4694C',
    stroke: '#F4694C',
    type: 'Bold',
}
