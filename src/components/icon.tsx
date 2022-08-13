import React from 'react';
import  { Eye } from '../icons/Bold';

type IconProps = {
    fill?: string;
    stroke?: string;
    type?: string;
    icon?: string;
}

const Icon = ({ fill, stroke, type, icon = "" }: IconProps) => {

    const IconComponent = Eye;

    return (
        <IconComponent fill={fill} stroke={stroke} />
    )
}

export default Icon;