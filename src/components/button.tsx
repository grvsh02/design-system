import React from 'react';
import styled from '@emotion/styled';

type Button = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label?: string,
    className?: string,
    disabled?: boolean,
    size?: 'l' | 'm' | 's'
}

const ButtonContainer = styled('span')`
    a, button{
      background: #fff;
      color: #f4694c ;
      border: 0.0625rem solid #f58269;
      border-radius: 0.3125rem;
      display: inline-block;
      position: relative;
      overflow: hidden;
      text-align: center;
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
`

// border-radius: 0.3125rem;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0.875rem 4.125rem;
// gap: 0.625rem;
// background-color: #f4694c;
// border: 0.0625rem solid #f58269;

const Button = ({ label, children, className = '', disabled = false ,onClick = () => {}, size = 'l' }: Button) => {

    const _className = (() => {
        let classNames =  '';

        classNames += `${size === 's' ? 'px-2 py-1' : size === 'm' ? 'px-3 py-2' : size === 'l' ? 'px-4 py-3' : ''} `;
        // classNames += ` text-sm `;
        classNames += className;
        return classNames;
    })();

    const buttonRenderer = () => (
        <button
            aria-label={label}
            onClick={e => {
                e.stopPropagation();
                onClick(e);
            }}
            disabled={disabled}
            className={_className}
        >
            {children}
        </button>
    );

    return (
        <ButtonContainer>
            {buttonRenderer()}
        </ButtonContainer>
    )
}

export default Button;