import React from 'react';
import styled from "@emotion/styled";

type BannerProps = {
    imgUrl?: string,
    text?: string,
    category?: string,
    className?: string,
}


const BannerContainer = styled.div`
  height: 210px;
  width: 340px;  
  
  img {
    height: 210px;
    width: 340px;
  }
  
`

const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5); 
  border: 2px solid blue;
`

const Text1 = styled.div`
    font-family: Pangram, sans-serif;
    color: #fff;
    font-size: 16px;
    text-align: center;
    font-weight: lighter;
`

const Text2 = styled.div`
    font-family: Pangram, sans-serif;
    color: #fff;
    font-size: 30px;
    text-align: center;
    font-weight: Bold;
`


const Banner = ({ imgUrl, className = '', category, text }: BannerProps) => {
    return (
        <BannerContainer className={'relative flex justify-center items-center' + `${className}`}>

            <img src={imgUrl} alt="Not Found :_(" className="absolute border-2 border-black"/>
            <BackDrop className="absolute" />
            <div className="absolute">
                <Text1>{category}</Text1>
                <Text2>{text}</Text2>
            </div>
        </BannerContainer>
    )
}

export default Banner;
