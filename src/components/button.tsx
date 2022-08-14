import React from 'react';
import styled from '@emotion/styled';
import "../index.css";
import Icon, {BoldTypes, OutlineTypes} from "./icon";

type Button = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label?: string,
    className?: string,
    disabled?: boolean,
    size?: 'base' | 'sm' | 'xs'
    iconProps?: IconProps
}

type IconProps = {
    icon?: keyof BoldTypes | keyof OutlineTypes,
    Type?: 'Bold' | 'Outline' | 'Social',
}

const ButtonContainer = styled('span')`
    button{
      background: #fff;
      color: #f4694c ;
      border: 0.0625rem solid #f58269;
      border-radius: 0.3125rem;
      display: flex;
      position: relative;
      overflow: hidden;
      text-align: center;
      font-family: Pangram, sans-serif;
      &:disabled {  
        color: #fff;
        background: #E0E0E0;
        pointer-events: none;
        border: 0.0625rem solid #E0E0E0;
      }
      &:focus, &:hover {
        cursor: pointer;
        background: #f4694c;
        color: #fff;
      }
    }
`;

const Button = ({ label, children, className = '', disabled = false ,onClick = () => {}, size = 'base', iconProps }: Button) => {

    const _className = (() => {
        let classNames =  'gap-2 ';

        classNames += `${size === 'xs' ? 'px-6 py-1.5 ' : size === 'sm' ? 'px-7 py-2 ' : size === 'base' ? 'px-8 py-3 ' : ''} `;
        classNames += `text-${size} `;
        classNames += className;
        return classNames;
    })();

    const [fill, setFill] = React.useState("#F4694C");
    const [stroke, setStroke] = React.useState("#F4694C");

    const buttonRenderer = () => (
        <button
            aria-label={label}
            onClick={e => {
                e.stopPropagation();
                onClick(e);
            }}
            disabled={disabled}
            className={_className}
            onMouseEnter={() => {
                setFill("#fff")
                setStroke("#fff")
            }}
            onMouseLeave={() => {
                setFill("#F4694C")
                setStroke("#F4694C")
            }}
        >
            {children}
            {iconProps ? <Icon fill={fill} stroke={stroke} size={size} {...iconProps} /> : null}
        </button>
    );

    return (
        <ButtonContainer>
            {buttonRenderer()}
        </ButtonContainer>
    )
}

export default Button;