import React from 'react';
import Icon from "./icon";
import Card from "./card";

type iconCardProps = {
    icon?: any;
    text?: string;
    type?: any;
    className?: string;
}

const IconCard = ({icon, text, type = "Outline", className}: iconCardProps) => {
    return (
        <Card className={"h-9 w-9 flex justify-center " + `${className}`} background="#ffffff">
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