import { Meta, Story} from '@storybook/react';
import Icon from '../src/components/icon';

const meta: Meta = {
    title: 'Basic Elements/Icon',
    component: Icon,
    argTypes: {
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
    <Icon fill={args.fill} stroke={args.stroke} />
);

export const Default = Template.bind({});

Default.args = {
    fill: '#F4694C',
    stroke: '#F4694C',
    type: 'Bold',
    icon: 'Eye',
}
