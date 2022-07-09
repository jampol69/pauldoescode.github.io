import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <Container>
        <a>
            <img src = "../images/logo.svg"></img>
        </a>

        <Menu>
            <LeftMenu>
                <a>Model S</a>
                <a>Model 3</a>
                <a>Model X</a>
                <a>Model Y</a>
                <a>Solar Roof</a>
                <a>Solar Panel</a>
            </LeftMenu>

            <RightMenu>
                <a>Shop</a>
                <a>Account</a>
                <a>Menu</a>

                <BurgerIcon>

                </BurgerIcon>
            </RightMenu>
        </Menu>
    </Container>
  )
}

export default Header


const Container = styled.div`
    
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    justfiy-content:space-between;
    left:0;
    right:0;
    top:0;
  
    
`
const Menu = styled.div`
display:flex;
flex:1;
justfiy-content:space-between;



`

const LeftMenu = styled.div`
padding-left:100px;
flex:1;

a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    font-size:14px;

    text-wrap:nowrap;
}

@media(max-width:768px){
   visibility:hidden;
   padding-left:0;
    
}
`

const RightMenu = styled.div`

    display:flex;

        align-items:center;
    
    

    a{
        font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    font-size:14px;
    }
`

const BurgerIcon = styled(MenuIcon)`
`

