import { ActionsContainer, ContentWrapper, DetailsContainer, FavoriteButton, ProductDescription, ProductImage, ProductPrice, ProductTitle, RatingContainer, Wrapper } from '@/app/ui/productDetail';
import { unstable_noStore } from 'next/cache';
import React from 'react'
import { Button, Container} from 'react-bootstrap';

export async function getProductDetail(id) {
  unstable_noStore();
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "GET" });

  if (!response.ok) {
    throw new Error('Failed to get product data');
  }

  return response.json();
}

export const generateMetadata = async ({ params }) => {
  const productDetail = await getProductDetail(params.productId);
  return {
    title: productDetail.title,
    description: productDetail.description
  }
}

const ProductDetail = async ({ params }) => {

  const productDetail = await getProductDetail(params.productId);

  return (
    <Wrapper>
    <Container>
      <ContentWrapper>
      <ProductImage src={productDetail.image} alt={productDetail?.title} />
      <DetailsContainer>
        <ProductTitle>{productDetail?.title}</ProductTitle>
        <ProductPrice>{productDetail?.price}</ProductPrice>
        <RatingContainer>{/* Stars Rating Component */}</RatingContainer>
        <ProductDescription>{productDetail?.description}</ProductDescription>
        <ActionsContainer>
          <Button>Add to Cart</Button>
          <FavoriteButton>{/* Favorite Icon */}</FavoriteButton>
        </ActionsContainer>
      </DetailsContainer>
      </ContentWrapper>
    </Container>
    </Wrapper>
  )
}

export default ProductDetail