"use client"

import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.section`
background: linear-gradient(#afbeaf, #93ca93);
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;

h1{
  padding: 20px;
  background: #cdbdbd;
  border-radius: 10px;
  color: #d04848;
}

/* padding: 300px; */
`
const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>Page Not Found!</h1>
    </Wrapper>
  )
}

export default PageNotFound