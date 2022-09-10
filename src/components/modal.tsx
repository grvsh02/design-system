import React, {Children, ReactNode} from 'react';
import styled from "@emotion/styled";
import Card from "./card";
import Button from "./button";

type ModalProps = {
    isOpen?: boolean;
    children?: ReactNode;
    onClose?: () => void;
}

type ModalContainerProps = {
    isOpen?: boolean;
}

const ModalContainer = styled('div')<ModalContainerProps>`
  display: ${props => props.isOpen? 'flex' : 'none'};
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

const ModalCSS = styled('div')<ModalProps>`
    margin: 15% ; /* 15% from the top and centered */
    padding: 20px;
    border : 1px solid #888;
    background-color: #f4694c`;

const Modal = ({children, isOpen, onClose}: ModalProps) => {
    return (
        <ModalContainer isOpen={isOpen}>
                <ModalCSS>
                    <Button className="align-top align-right " iconProps={{icon: "CloseCircle",}}  size="base" onClick={onClose}/>
                    {children}
                </ModalCSS>
        </ModalContainer>
    )
}

export default Modal;