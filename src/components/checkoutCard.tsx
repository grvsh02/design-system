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
    quantity?: number;
    onQuantityChange?: (Qty: number) => void;
    sizesAvailable?: {
        name?: string;
    }[]
    size?: string;
    onSizeChange?: (str: string) => void;
    maxQuantity?: number;
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
  font-family: Pangram, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
    :hover {
      cursor: pointer;
    }
`
const ProductDetailsContainer = styled('div')`
    padding: 0px 20px 20px 20px;
`

const ProductName = styled('div')`
    font-size: 16px;
    font-weight: bold;
    color: #030e19;
    margin-bottom: 10px;
    :hover {
        cursor: pointer;
    }
`

const ProductCard = ({
                         brand, name = "", imgUrl, price,
                         productProps = {}, onClick = () => {}, moveToFavorite = () => {},
                         onCancel = () => {}, sizesAvailable, size, onSizeChange = () => {},
                         onQuantityChange = () => {}, quantity, maxQuantity = 10
    }: ProductCard) =>  {

    return (
    <ProductCardContainer >
        <div className="flex">
            <ProductImageContainer onClick={() => onClick}>
                <div>
                    <img src={imgUrl ? imgUrl : image} alt={"Error O_o"}/>
                </div>
            </ProductImageContainer>
            <ProductDetailsContainer>
                <div>
                    <div style={{ fontSize: '12px', color: "#4f4f4f", fontWeight: 300 }} className="pt-1 pr-1 pb-1">
                        {brand}
                    </div>
                </div>
                <ProductName style={{ fontSize: '14px', color: "#030e19", fontWeight: 600 }} className="pt-1 pr-1 pb-1" onClick={() => onClick}>
                    {name}
                </ProductName>
                <div className="flex">
                    {productProps.strikePrice &&
                        <div style={{ fontSize: '16px', color: "#bdbdbd", textDecoration: "line-through" }} className="pt-2.5 pb-1 pr-1">
                            ₹{productProps.strikePrice}
                        </div>
                    }
                    <div style={{ fontSize: '20px', color: "#f4694c" }} className="pt-1 pr-1 pb-1">
                        ₹{price}
                    </div>
                </div>
                <div className="flex">

                </div>
            </ProductDetailsContainer>
        </div>
        <div>
            <IconCard icon="Trash" type="Outline" className="flex" onClick={onCancel}/>
        </div>
    </ProductCardContainer>
    )
};


export default ProductCard;
