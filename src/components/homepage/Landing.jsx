"use client";

import React from "react";
import styled from "@emotion/styled";

import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 40px;
  
  @media (min-width: 992px) {
    
    justify-content: space-between;
  flex-direction: row;
    
  }
`;
const Section = styled.section`
padding: 60px 0 20px 0;

  background-image: linear-gradient(#0000006c, #00000091),
    url("images/landing-image.webp");
`;

const Title = styled.h1`

font-size: 2.5rem; 
margin-bottom: 0.5rem;

@media (min-width: 992px) {
    font-size: 4.5rem; 
  
}
`;

const Subtitle = styled.p`
  font-size: 1.2rem; // Readable font size for the subtitle
  margin-bottom: 2rem;
`;

const TestWrapper = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 45%;
  }
`;
const Image = styled.img`
  width: 90%;
  @media (min-width: 992px) {
    width: 300px;
  }
`;

const Landing = () => {
  return (
    <Section>
      <StyledContainer>
        <TestWrapper>
          <Title>Vermicomposting: Nature&apos;s Recycle</Title>
          <Subtitle>
            Discover the eco-friendly magic of vermicomposting. Turn organic
            waste into nutrient-rich compost, enriching soil and promoting
            sustainable living with ease.
          </Subtitle>
          <button className="btn btn-primary">Read More</button>
        </TestWrapper>
        <Image src="/images/logo.webp" alt="" />
        {/* <Circle /> */}
        {/* <AccentCircle /> */}
      </StyledContainer>
    </Section>
  );
};

export default Landing;
