import React from "react";
import styled from '@emotion/styled';
import image from '../../public/img.png';
import ReactStars from "react-rating-stars-component";
import IconCard from "./iconCard";

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
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 400ms, filter 400ms;
  }
  :hover {
    img {
      filter: brightness(0.8);
    }
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
    cursor: pointer;
    div {
      opacity: 1;
    }
  }
`

const ProductImageContainer = styled('div')`
    position: relative;
    height: 218px;
    width: 227px;
`
const ProductDetailsContainer = styled('div')`
    height: 100%;
    width: 100%;
`
const OptionsContainer = styled('div')`
    transition: 0.5s;
    opacity: 0;
`


const ProductCard = ({ brand, name = "", imgUrl, price, productProps = {}, onClick = () => {}  }: ProductCard) =>  (
    <ProductCardContainer>
        <ProductImageContainer className="static">
            <div className="absolute">
                <img src={imgUrl ? imgUrl : image} alt={"Error O_o"}/>
            </div>
            <OptionsContainer className="flex absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <IconCard text="Xl" className="m-0.5"/>
                <IconCard icon="Circle" type="Bold" className="m-0.5"/>
                <IconCard icon="Heart" className="m-0.5"/>
                <IconCard icon="Eye" className="m-0.5"/>
                <IconCard icon="ShoppingCart" className="m-0.5"/>
            </OptionsContainer>
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
