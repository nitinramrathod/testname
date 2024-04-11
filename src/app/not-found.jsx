
import { headers } from 'next/headers'
import React from 'react'
import { Wrapper } from './ui/not-found'


const PageNotFound = async() => {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    
    <Wrapper>
      <h1>Page Not Found! {domain}</h1>
    </Wrapper>
  )
}

export default PageNotFound