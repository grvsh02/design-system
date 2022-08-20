import React from 'react';
import Icon from "./icon";
import Card from "./card";

type iconCardProps = {
    icon?: any;
    text?: string;
    type?: any;
    className?: string;
    onClick?: () => void;
}

const IconCard = ({icon, text, type = "Outline", className, onClick = () => {} }: iconCardProps) => {
    return (
        <Card clickable={true} className={"h-9 w-9 flex justify-center hover:cursor-pointer " + `${className}`} background="#ffffff" onClick = {() => onClick}>
            {icon ? (
                <div className="flex justify-center items-center">
                    <Icon icon={icon} type={type} fill="black" size="base"/>
                </div>
            ) : text ? (
                <div className="h-9 w-9 text-sm flex justify-center items-center" >
                    {text}
                </div>
            ): null}
        </Card>
    )
}

export default IconCard;