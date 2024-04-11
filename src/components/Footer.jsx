"use client";

import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const FooterWrapper = styled.footer`
  color: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const Section = styled.section`
  background-color: #1a1a2e; 
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const FooterTitle = styled.h4`
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  margin-top: 1rem;
`;

const LegalSection = styled.div`
  border-top: 1px solid #444;
  padding-top: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    & > span {
      margin-bottom: 0.5rem;
    }
  }
`;

const SubscribeSection = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    order: -1;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;

const CheckboxContainer = styled.label`
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterWrapper>
          <FooterColumn>
            <FooterTitle>Chobani</FooterTitle>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Our Café</FooterLink>
            <FooterLink href="#">Chobani News</FooterLink>
            <FooterLink href="#">Foodservice</FooterLink>
            <SocialMediaIcons>{/* Icons would go here */}</SocialMediaIcons>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Consumer care</FooterTitle>
            <FooterLink href="#">Alumni</FooterLink>
            <FooterLink href="#">Chobani Canada</FooterLink>
            <FooterLink href="#">Chobani Mexico</FooterLink>
          </FooterColumn>
          <SubscribeSection>
            <FooterTitle>Get the freshest Chobani news</FooterTitle>
            <Input placeholder="Your email here" type="email" />
            <Button>Subscribe</Button>
           
          </SubscribeSection>
          <LegalSection>
            <span>Website Terms</span>
            <span>Privacy Policy</span>
            <span>Accessibility Statement</span>
            <span>CA Transparency in Supply Chains Act</span>
            <span>Supplier Code of Conduct</span>
            <span>Marketing to Children</span>
            <span>Do Not Sell My Information</span>
            <span>©2024 Chobani, LLC. All Rights Reserved.</span>
          </LegalSection>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
