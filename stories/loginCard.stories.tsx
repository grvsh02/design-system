import React from 'react';

import { Meta, Story } from '@storybook/react';

import LoginCard from '../src/components/loginCard';

const meta: Meta = {
    title: 'Login/Login Card',
    component: LoginCard,
    parameters: {
        controls: { expanded: true },

    },

}

export default meta;

const Template: Story = args => (
    <LoginCard/>
);

export const Default = Template.bind({});
Default.args = {
    title: "Login",
    subtitle: "Please enter your credentials to login",
    buttonLabel: "Login",
    forgotPasswordLabel: "Forgot Password?",
    signUpLabel: "Don't have an account? Sign Up",
    signUpLink: "/signup",
    forgotPasswordLink: "/forgot-password",
    onSubmit: (data: any) => {
        console.log(data);
    }
}