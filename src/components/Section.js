import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(props) {
  
  return (
    <Container bgImage= {props.backgroundImg}>
        <Fade bottom>
            <CarModel>
                <h1>{props.title}</h1>
                <p>Order Online for <a>Touchless Delivery</a></p>
            </CarModel>
        
        </Fade>

        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Fade>
    </Container>
  )
}

export default Section


const Container = styled.div`
width:100%;
height:100vh;

background-image:${props => `url("/images/${props.bgImage}")`};
background-size: cover;
background-position:center;
display:flex;
flex-direction: column;

justify-content:space-between;
align-items:center;

`

const CarModel = styled.div`

margin-top:50%;
 h1{
    margin-bottom:10px;
 }
 a{
    border-bottom:1px solid black;
    cursor:pointer;
 }
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:50px;
 @media(max-width:768px){
    flex-direction:column;
 }

`

const LeftButton = styled.div`
display:flex;
background-color: rgba(23,23,32,0.8);
height:40px;
color:white;
width:260px;
align-items:center;
justify-content:center;
border-radius:100px;
margin:8px;
cursor:pointer;
`

const RightButton = styled.div`
display:flex;
background-color: white;
height:40px;
color:black;
width:260px;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.65;
cursor:pointer;
margin:8px;
`