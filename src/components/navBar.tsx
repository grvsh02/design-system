import React from 'react';
import logo from '../../public/Homezy.png';
import styled from "@emotion/styled";
import Button from "./button";
import IconCard from "./iconCard";

const NavbarContainer = styled('div')`
    height: 76px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
`

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