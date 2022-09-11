import React, {Children, ReactNode, useState} from 'react';
import styled from "@emotion/styled";
import Card from "./card";
import Button from "./button";
import * as open from "open";

type ModalProps = {
    isOpen?: boolean;
    children?: ReactNode;
    onClose?: () => {};
}


type ModalContainerProps = {
    isOpen?: boolean;
}

const ModalContainer = styled('div')<ModalContainerProps>`
  display: ${props => props.isOpen? 'block' : 'none'};
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
    background-color: #f4694c
`;



const Modal = ({children,isOpen}: ModalProps) => {

    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const toggle = () => setIsModalOpen(!isModalOpen);

    return (
        <ModalContainer isOpen={isModalOpen}>
                <ModalCSS>
                    <div>
                        <h1 className="text-2xl font-bold">Are you sure you want to delete this item?</h1>
                        {children}
                    <Button className="" iconProps={{icon: "CloseCircle"}}  size="base" onClick={toggle}/>
                    </div>
                </ModalCSS>
        </ModalContainer>
    )
}

export default Modal;