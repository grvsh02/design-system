import React, {Children, ReactNode, useState} from 'react';
import styled from "@emotion/styled";
import Button from "./button";

type ModalProps = {
    isOpen?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    title?: string;
}

type ModalContainerProps = {
    isOpen?: boolean;
}

const ModalContainer = styled('div')<ModalContainerProps>`
  display: ${props => props.isOpen? 'flex':'none'};
  justify-items: center;
  align-items: center;
  justify-content: center;
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4)
`;

const ModalBox = styled('div')<ModalProps>`
    margin: 15% ; 
    padding: 20px;
    border : 2px solid ;
    background-color: #fefefe;
`;

const Modal = ({children,isOpen,onClose}: ModalProps) => {

    return (
        <ModalContainer isOpen={isOpen}>
                <ModalBox>
                    <div>
                        <a  className="close"  role="button" onClick={onClose}>X</a>
                        {children}
                    </div>
                </ModalBox>
        </ModalContainer>
    )
}

export default Modal;