"use client";

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  max-width: 1170px;
  margin: auto;
  background-color: #f5f5f5; // Based on the image provided
`;

export const ProductImage = styled.img`
  border-radius: 25px;
  box-shadow: 0 0 45px #0000003b;
  width: 40%; // Assuming the image takes half the width of the container
  max-width: 500px; // Adjust according to your layout needs
  object-fit: contain; // To ensure the product image is fully visible
`;

export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
export const Wrapper = styled.section`
  background-color: #f5f5f5;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  max-width: 1170px;
  margin: auto;
  gap: 30px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const RatingContainer = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  margin-bottom: 2rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export const FavoriteButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #333;

  &:hover {
    background-color: white;
  }
`;
