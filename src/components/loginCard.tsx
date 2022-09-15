import React from 'react';
import Button from "./button";
import styled from "@emotion/styled";

const LoginCardContainer = styled('div')`
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    font-family: Pangram, sans-serif;
    :hover {
        cursor: pointer;
    }
`

const LoginCard = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
    const [error, setError] = React.useState('');

    return (
        <LoginCardContainer>
            <div className="px-2 pt-2">
                <h3 className="text-3xl mb-2 font-semibold">
                    Login
                </h3>
                <p className="text-lg opacity-90 mb-2">Login to your account</p>
            </div>
            <div className="px-2 pb-2">
                <div className="mb-2">
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <Button
                        label="Login"
                        onClick={() => {}}
                    />
                </div>
                <div className="mb-2">
                    <Button
                        label="Register"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </LoginCardContainer>
    )
}

export default LoginCard;