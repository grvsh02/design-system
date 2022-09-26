import React from 'react';
import logo from '../../public/Homezy.png';
import styled from "@emotion/styled";
import Button from "./button";
import IconCard from "./iconCard";
import Icon from "./icon";
import searchNormal from "../icons/outline/SearchNormal";


const NavbarContainer = styled('div')`
    height: 76px;
    width: 100%;/
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
`;

const TextFieldContainer = styled.div<{border: string}>`
    height: 100%;
    width: 100%;
    border: 2px solid ${props  => props.border};
    border-radius: 5px;
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
    }
`;

const TabContainer = styled.div`
    display: flex;
`

const Logo = styled('div')`
  padding-left: 14px;
  :hover {
    cursor: pointer;
  }
`

const NavIcons = styled('div')`
    display: flex;
`

const items = ["Men", "Women", "Kids", "Beauty"]

const NavBar = ({}) => {

    const [selected, setSelected] = React.useState(null);
    const [stroke, setStroke] = React.useState("#828282");

    return (
        <NavbarContainer>
            <Logo onClick={() => setSelected(null)}>
                <img src={logo} alt="logo" />
            </Logo>
            <div>
                <TabContainer>
                    {items?.map((item, index: any) => {
                        return (
                            <Button className='m-2' onClick={() => setSelected(index)} type={selected == index ? "selected" : "secondary"}>
                                {item}
                            </Button>
                        )
                    })}
                </TabContainer>
            </div>
            <div className='w-2/3'>
                <TextFieldContainer
                    className='w-full'
                    onFocus={() => {
                        setStroke("#F4694C")
                    }}
                    onBlur={() => {
                        setStroke("#828282")
                    }}
                    border={stroke}
                >
                 <span className="pt-2 pl-3">
                        <Icon
                            fill="#F4694C"
                            icon="SearchNormal"
                            size="xs"
                            stroke="#F4694C"
                            type="Outline"/>
                    </span>
                    <InputContainer placeholder="Search" />
                </TextFieldContainer>
            </div>
            <div className="flex justify-end items-center w-2/5 h-full">
                <div>
                    <NavIcons>
                        <IconCard icon="Frame" type="Outline" />
                        <IconCard icon="Heart" type="Outline" />
                        <IconCard icon="ShoppingCart" type="Outline" />
                    </NavIcons>
                </div>
            </div>
        </NavbarContainer>
    )
}

export default NavBar;
