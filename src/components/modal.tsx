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
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`


const Modal = ({children, isOpen, onClose}: ModalProps) => {
    return (
        <ModalContainer isOpen={isOpen}>
            <Card>
                <Button iconProps={{icon: "CloseCircle"}} onClick={onClose}/>
                {children}
            </Card>
        </ModalContainer>
    )
}

export default Modal;