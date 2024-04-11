"use client";

import React from "react";
import ShoppingCard from "../common/ShoppingCard";
import SearchBar from "../common/SearchBar";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
`;

const ProductList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <SearchBar/>
      <CardWrapper>
        {data?.map((item) => (
          <ShoppingCard key={item.id} id={item.id} imgSrc={item.image} title={item.title} description={item?.description} />
        ))}
        <ShoppingCard />
      </CardWrapper>
    </Container>
  );
};

export default ProductList;
