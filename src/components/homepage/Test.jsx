"use client"
import styled from '@emotion/styled'
import React from 'react'


const Div =styled.div`
    padding: 30px;
    background: red;
`
const Test = ({data}) => {
    console.log("client component==>", data);
  return (
    <Div>Test</Div>
  )
}

export default Test