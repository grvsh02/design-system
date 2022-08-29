import React from "react";
import styled from "@emotion/styled";
import {stringify} from "postcss";


export const sizes = {
    large: 80,
    medium: 60,
    small: 40,
};

export const textsizes = {
    large: "4xl",
    medium: "3xl",
    small: "2xl",
}
export const Avatar = ({ size ='medium', children='',classname='',...props }) => {
    // @ts-ignore
    const sizePx = sizes[size];
    // @ts-ignore
    const textsize = textsizes[size];
    return (
        <div
            className={`flex justify-center items-center bg-black text-white p-30 ${classname}`}
            style={{ width: sizePx, height: sizePx, borderRadius: "50%", fontSize: textsize }}
            {...props}
        >
            {children}
        </div>
    );

}


export default Avatar;