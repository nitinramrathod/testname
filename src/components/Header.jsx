"use client";

import React from "react";
import styled from "@emotion/styled";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";


const StyledLink = styled(Link)`
text-decoration: none;
color: white;

 
`;

const Logo = styled.img`
  height: 50px; // Set your logo height here
  cursor: pointer;
  border-radius: 50%;
`;

const StyledNavbar = styled(Navbar)`
background: #1a1a2eb9;
backdrop-filter: blur(15px);
 margin-bottom: -100px;
`;


const Header = () => {
  return (

    <StyledNavbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#">
          <Logo src="/images/logo.webp" alt="WordStream Logo" /></Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <StyledLink className="ms-3" href="/">Home</StyledLink>
            <StyledLink className="ms-3" href="/product">Products</StyledLink>
            <StyledLink className="ms-3" href="/users">Users</StyledLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
   
  );
};

export default Header;
