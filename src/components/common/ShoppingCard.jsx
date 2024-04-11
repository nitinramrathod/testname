"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import Link from "next/link";


const ProductCard = styled(Card)`
  max-width: 21rem; 
  font-family: "Open Sans", sans-serif; 
  
  @media (min-width: 992px) {
    max-width: 17rem; 
    
  }
  @media (min-width: 1024px) {
    max-width: 16rem; 
    
  }
`;

const ProductImage = styled(Card.Img)`
  object-fit: cover; 
  height: 180px; 
`;

const PriceTag = styled.h3`
  color: #e94560; 
  font-weight: bold;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const ColorDot = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color}; 
  border-radius: 50%;
  display: inline-block;
`;

const DescriptionText = styled(Card.Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
const TitleText = styled(Card.Title)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-decoration: none;
`;

const colorOptions = ["#e0b0ff", "#ff9a8b", "#6e5773"];

const ShoppingCard = ({ description, id, imgSrc, title }) => {
  return (
    <Link href={`product/${id}`}>
      <ProductCard>
        <ProductImage variant="top" src={imgSrc} alt="Product" />
        <Card.Body>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
          <PriceTag>$45,00</PriceTag>
          <ColorOptions>
            {colorOptions.map((color) => (
              <ColorDot key={color} color={color} />
            ))}
          </ColorOptions>
          <Button variant="primary" className="w-100 mt-3">
            Add to Cart
          </Button>
        </Card.Body>
      </ProductCard>
    </Link>
  );
};

export default ShoppingCard;
