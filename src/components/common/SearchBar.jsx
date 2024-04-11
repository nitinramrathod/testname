import React from 'react'
import { Form, Button } from 'react-bootstrap';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 2rem auto;
`;

const StyledForm = styled(Form)`
  display: flex;
`;

const StyledInput = styled(Form.Control)`
  border-radius: 30px 0 0 30px; // Round only the left side for the input
  padding: 10px 30px;
  font-size: 1rem;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-grow: 1; // Input will fill the available space
`;

const SearchButton = styled(Button)`
  border-radius: 0 20px 20px 0; // Round only the right side for the button
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  color: #fff;
  background-color: #0d6efd; // Bootstrap primary color
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const SearchBar = () => {
  return (
    <SearchContainer>
      <StyledForm className="d-flex">
        <StyledInput type="search" placeholder="Search" aria-label="Search" />
        <SearchButton type="submit">Search</SearchButton>
      </StyledForm>
    </SearchContainer>
  )
}

export default SearchBar