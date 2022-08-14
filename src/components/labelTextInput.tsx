import React from 'react';
import styled from "@emotion/styled";
import Icon from "./icon";

type IconTextInput = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value : any) => void;
    charLimit?: number;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    type?: ('email' | 'number' | 'password' | 'text' | 'textarea' | 'url')
    errorText?: string;
    showCharLimit?: boolean;
    showLimit?: boolean;
}


const TextFieldContainer = styled.div`
    height: 100%;
    width: 100%;
    color: #030e19;
    font-size: 14px;
`;

const InputContainer = styled.input`
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    border: 1px solid #828282;
    border-radius: 5px;
    color: #030e19;
    font-size: 10px;
    ::placeholder {
        color: #828282;
    }
    :focus {
        outline: none;
        border: 1px solid #F4694C;
    }
`;

const LabelTextInput = ({ placeholder="Email Address", label = "label" , errorText, charLimit, showLimit, showCharLimit, disabled, onChange = () => {}, required, type, className, value }: IconTextInput) => {

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
        <TextFieldContainer className={className}>
            <div className={charLimit ? 'w-2/3 px-0' : 'w-full px-0'}>
                {label &&
                    <label className="text-lg opacity-80" aria-hidden={false}>
                        {label}
                        {required && <span className="required-marker">*</span>}
                    </label>}
                {(charLimit) &&
                    <div className="w-1/3 opacity-80 px-1 flex items-end justify-end">
                        {value?.length}/{charLimit}
                    </div>}
            </div>
            <InputContainer placeholder={placeholder} onChange={handleChange} disabled={disabled} value={inputValue} type={type}/>
            {errorText &&
                <div className="text-red-400 mt-1 text-xs italic">
                    {errorText}
                </div>}
        </TextFieldContainer>

    )
}

export default LabelTextInput;