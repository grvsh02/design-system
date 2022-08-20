import React from "react";
import styled from '@emotion/styled';
import image from '../../public/img.png';
import IconCard from "./iconCard";

type ProductCard = {
    brand?: string,
    name?: string;
    imgUrl?: string;
    price?: number;
    productProps?: ProductProps;
    onClick?: (id: number) => void;
    onCancel?: () => void;
    moveToFavorite?: () => void;
}

type ProductProps = {
    rating?: number;
    strikePrice?: number;
    colorOptions?: any;
    sizeOptions?: any;
}

const ProductCardContainer = styled('div')`
  height: auto;
  width: 70%;
  padding: 20px;
  background: #fff;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  font-family: Pangram, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 400ms, filter 400ms;
  }
`

const ProductImageContainer = styled('div')`
    height: 218px;
    width: 227px;
`
const ProductDetailsContainer = styled('div')`
    padding: 0px 20px 20px 20px;
    
`

const ProductCard = ({ brand, name = "", imgUrl, price, productProps = {}, onClick = () => {}, moveToFavorite = () => {}, onCancel = () => {}  }: ProductCard) =>  (
    <ProductCardContainer onClick={() => onClick}>
        <div className="flex">
            <ProductImageContainer>
                <div>
                    <img src={imgUrl ? imgUrl : image} alt={"Error O_o"}/>
                </div>
            </ProductImageContainer>
            <ProductDetailsContainer>
                <div>
                    <div style={{ fontSize: '10px', color: "#4f4f4f", fontWeight: 300 }} className="pt-1 pr-1 pb-1">
                        {brand}
                    </div>
                </div>
                <div style={{ fontSize: '10px', color: "#030e19", fontWeight: 600 }} className="pt-1 pr-1 pb-1">
                    {name?.length > 20 ? name.substring(0, 25) + "..." : name}
                </div>
                <div className="flex">
                    {productProps.strikePrice &&
                        <div style={{ fontSize: '10px', color: "#bdbdbd", textDecoration: "line-through" }} className="pt-2.5 pb-1 pr-1">
                            ₹{productProps.strikePrice}
                        </div>
                    }
                    <div style={{ fontSize: '16px', color: " #f4694c" }} className="pt-1 pr-1 pb-1">
                        ₹{price}
                    </div>
                </div>
            </ProductDetailsContainer>
        </div>
        <div className="border-2 h-auto">
            <IconCard icon="Trash" type="Outline" className="flex" onClick={onCancel}/>
        </div>
    </ProductCardContainer>
);


export default ProductCard;
