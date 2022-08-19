import React from 'react';
import styled from "@emotion/styled";
import Icon from "./icon";

type IconTextInput = {
    placeholder?: string;
    value?: string;
    onChange?: (value : any) => void;
    charLimit?: number;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    type?: ('email' | 'number' | 'password' | 'text' | 'textarea' | 'url')
    errorText?: string;
    PreTextIcon?: any;
    PostTextIcon?: any;
    showCharLimit?: boolean;
}


const TextFieldContainer = styled.div<{border: string}>`
    height: 100%;
    width: 100%;
    border: 1px solid ${props  => props.border};
    display: flex;
    font-family: Pangram, sans-serif;
`;

const InputContainer = styled.input`
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    color: #828282;
    font-size: 10px;
    ::placeholder {
        color: #828282;
    }
    :hover {
        border: none;
    }
    :focus {
        outline: none;
        border: none;
    }
`;

const IconTextInput = ({ placeholder="Email Address", PostTextIcon = "ArrowRight1", PreTextIcon = "SmsTracking" , errorText, charLimit, disabled, onChange = () => {}, required, type, className, value }: IconTextInput) => {

    const [inputValue, setInputValue] = React.useState(value !== null ? value : "");

    React.useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e: any) => {
        const value = e.currentTarget.value;
        if (charLimit == null || (value.length <= charLimit)) {
            if (typeof onChange === 'function')
                if (type === 'number')
                    onChange(parseInt(value));
                else
                    onChange(value);
            setInputValue(value);
        }
    };

    const [stroke, setStroke] = React.useState("#828282");

    return (
        <div>
            <TextFieldContainer
                className={className}
                onFocus={() => {
                    setStroke("#F4694C")
                }}
                onBlur={() => {
                    setStroke("#828282")
                }}
                border={stroke}
            >
                { PreTextIcon && (
                    <span className="pt-2 pl-3">
                        <Icon icon={PreTextIcon} size="sm" stroke={stroke} type="Outline"/>
                    </span>
                )}
                <InputContainer placeholder={placeholder} onChange={handleChange} disabled={disabled} value={inputValue} type={type}/>
                { PostTextIcon && (
                    <span className="pt-2 pr-3">
                        <Icon icon={PostTextIcon} size="sm" stroke={stroke} type="Outline"/>
                    </span>
                )}
            </TextFieldContainer>
            {errorText &&
                <div className="text-red-400 mt-1 text-xs italic">
                    {errorText}
                </div>}
        </div>

    )
}

export default IconTextInput;