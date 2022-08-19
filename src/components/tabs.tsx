import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import Button from "./button";
import Icon from "./icon";

type TabItemsProps = {
    label?: string,
    disabled?: boolean,
    icon?: any,
}

type TabsProps = {
    items?: TabItemsProps[];
    active?: number;
    className?: string;
    onChange?: (index: number) => void;
    ButtonClassName?: string;
}

const TabContainer = styled.div`
    display: flex;
`


const Tabs = ({ items, active = 0, onChange = () => {}, className, ButtonClassName }: TabsProps) => {

    const [selected, setSelected] = React.useState(active);

    useEffect(() => {
        onChange(selected);
    },[selected]);

    return (
        <TabContainer className={'' + `${className}`}>
            {items?.map((item, index) => {
                return (
                    <Button className={'m-2 ' + `${ButtonClassName}`} onClick={() => setSelected(index)} type={selected == index ? "selected" : "secondary"}>
                        {item?.label ? (
                            item.label
                        ) : item.icon ? (
                            <Icon icon={item.icon} size="sm"/>
                        ) : ""}
                    </Button>
                )
            })}
        </TabContainer>
    )
}

export default Tabs;