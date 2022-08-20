import React from 'react';
import styled from '@emotion/styled';
import Icon from "./icon";

type DropdownProps = {
    placeholder?: string;
    label?: string;
    className?: string,
    onClick?: () => void,
    isSelected?: string,
    onClose?: () => void,
    disabled?: boolean,
    onChange?: (value : any) => void,
    items?: {
        name?: any,
        className?: string,
    }[]
}

const TextFieldContainer = styled.div`
    height: 100%;
    width: 100%;
    color: #030e19;
    font-size: 14px;
    font-family: Pangram, sans-serif;
`;

const DropDownContainer = styled.div`
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    display: flex;
    border: 1px solid #828282;
    color: #030e19;
    font-size: 10px;
    font-family: Pangram, sans-serif;
    ::placeholder {
        color: #828282;
    }
    :focus {
        outline: none;
        border: 1px solid #F4694C;
    }
`;

const InputContainer = styled.div`
      width: 100%;
      padding: 0.5rem 0.5rem 0.5rem 0.7rem;
      color: #828282;
      cursor: pointer;
      font-size: 10px;
      background-color: #fff;
      :hover {
        background-color: #F4694C;
        color: #fff;
      }
    `;

const DropDownMenu = styled('div')`
  margin-top: 0.5rem;
  background: #f6f6f6;
  border: 1px solid #bdbdbd;
`;

const Dropdown = ({ items = [], onClose = () => {}, className = '', placeholder, label, isSelected, disabled, onChange = () => {} } : DropdownProps) =>{

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(isSelected ? isSelected : "");

    const handleChange = (e: any) => {
        const value = e.currentTarget.value;
        if (typeof onChange === 'function')
                onChange(value);
        setSelectedItem(value);
    };

    return (
        <div className={className}>
            <TextFieldContainer>
                <div className={'w-full px-0'}>
                    {label &&
                        <label className="text-lg opacity-80" aria-hidden={false}>
                            {label}
                        </label>}
                </div>
                <DropDownContainer className="justify-between" onClick={() => setIsOpen(true)}>
                    {selectedItem !== "" ? selectedItem : placeholder}
                    <div className="ml-1">
                        <Icon size="sm" type="Outline" icon="ArrowDown" />
                    </div>
                </DropDownContainer>
            </TextFieldContainer>
            {isOpen && !disabled ? (
                <DropDownMenu role="navigation" onMouseLeave={() => setIsOpen(false)}>
                    <div role="menu" onMouseLeave={onClose}>
                        {items.length > 0 && items.map((n,i) => {
                            return (
                                <InputContainer key={i} className={n?.className} onClick={() => {
                                    onChange(n?.name);
                                    setSelectedItem(n?.name);
                                    setIsOpen(false);
                                }}>
                                    {n?.name}
                                </InputContainer>
                            )
                        })}
                    </div>
                </DropDownMenu>
            ) : <div />}
        </div>
    )
}

export default Dropdown;