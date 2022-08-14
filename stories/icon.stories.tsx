import { Meta, Story} from '@storybook/react';
import Icon from '../src/components/icon';

const meta: Meta = {
    title: 'Basic Elements/Icon',
    component: Icon,
    argTypes: {
        icon : {
            control: {
                    type: 'select',
                    options: ["Eye", "Trash", "Sort", "CloseCircle", "SearchNormal", "SmsTracking", "Heart", "Frame", "Category", "ShoppingCart", "ArrowUp", "ArrowRight", "ArrowSquareRight", "ArrowSquareLeft", "ArrowLeft", "ArrowDown", "TickSquare", "MinusSquare", "AddSquare"]
            }},
        size: { control: { type: 'select', options: ["base", "sm", "xs"] } },
        type: { control: { type: 'select', options: ["Bold", "Outline", "Social"] } },
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
    <Icon fill={args.fill} stroke={args.stroke} icon={args.icon} size={args.size} type={args.type}/>
);

export const Default = Template.bind({});

Default.args = {
    fill: '#F4694C',
    stroke: '#F4694C',
}
