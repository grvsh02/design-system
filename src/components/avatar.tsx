import React from 'react';
import styled from "@emotion/styled";
import Icon from "./icon";

type AvatarProps = {
    imgUrl?: string,
    size: 'base' | 'sm' | 'xs';
}

type AvatarContainerProps = {
    size: 'base' | 'sm' | 'xs';
}

const AvatarContainer = styled('div')<AvatarContainerProps>`
  width: ${props => props.size === 'base' ? '80px' : props.size === 'sm' ? '60px' : '30px'};
  height: ${props => props.size === 'base' ? '80px' : props.size === 'sm' ? '60px' : '30px'};
  img {
    width: ${props => props.size === 'base' ? '80px' : props.size === 'sm' ? '60px' : '30px'};
    height: ${props => props.size === 'base' ? '80px' : props.size === 'sm' ? '60px' : '30px'};
    border-radius: 50%;
  }
`


const Avatar = ({size = "base", imgUrl }: AvatarProps) => {

    return (
        <AvatarContainer size={size}>
            {imgUrl ? (
                <img src={imgUrl} alt="Not Found :_(" />
            ): (
                <Icon icon="Frame" type="Outline"/>
            )}
        </AvatarContainer>
    )
}

export default Avatar;