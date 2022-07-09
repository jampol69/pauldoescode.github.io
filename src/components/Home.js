import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Wrapper>
           <Section 
                title="Model S"
            
                backgroundImg="model-s.jpg"
           />
            <Section 
                title="Model Y"
            
                backgroundImg="model-y.jpg"          
           />
            <Section 
                title="Model X"
            
                backgroundImg="model-x.jpg"          
           />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
`

