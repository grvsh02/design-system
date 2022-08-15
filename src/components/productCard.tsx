import React from "react";
import styled from '@emotion/styled';
import image from '../../public/img.png';
import ReactStars from "react-rating-stars-component";

type ProductCard = {
    brand?: string,
    name?: string;
    imgUrl?: string;
    price?: number;
    productProps?: ProductProps;
    onClick?: (id: number) => void;
}

type ProductProps = {
    rating?: number;
    strikePrice?: number;
    colorOptions?: any;
    sizeOptions?: any;
}

const ProductCardContainer = styled('div')`
  height: 321px;
  width: 267px;
  padding: 20px;
  background: #fff;  
  :hover {
    background: #e0e0e0;
    cursor: pointer;
  }
`

const ProductImageContainer = styled('div')`
    height: 218px;
    width: 227px;
    img {
        width: 100%;
        height: 100%;
    }
`
const ProductDetailsContainer = styled('div')`
    height: 100%;
    width: 100%;
`

const ProductCard = ({ brand, name = "", imgUrl, price, productProps = {}, onClick = () => {}  }: ProductCard) =>  (
    <ProductCardContainer>
        <ProductImageContainer className="">
            <img src={imgUrl ? imgUrl : image} alt={"Error O_o"}/>
        </ProductImageContainer>
        <ProductDetailsContainer>
            <div className="flex justify-between">
                <div style={{ fontSize: '10px', color: "#4f4f4f", fontWeight: 300 }} className="pt-1 pr-1 pb-1">
                    {brand}
                </div>
                <ReactStars
                    count={5}
                    value={productProps.rating ? productProps.rating : 0}
                    size={15}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#f4694c"
                />
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
    </ProductCardContainer>
);


export default ProductCard;
