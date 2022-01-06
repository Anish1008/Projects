import React from 'react'
import styled from 'styled-components'
function header() {
    return (
        <>
        <Container>
            <Logo src="/images/logo.svg"/>
            <Navbar>
                <a>Model S</a>
                <a>Model 3</a>
                <a>Model X</a>
                <a>Model Y</a>
                <a>Solar Roof</a>
                <a>Solar Panels</a>
            </Navbar>
            <RNavbar>
                <a>Shop</a>
                <a>Account</a>
                <a>Menu</a>
            </RNavbar>
        </Container>
        </>

    )
}

export default header

const Container = styled.div`
position:absolute;
display:flex;
align-items: center;
justify-content: space-between;
height: 60px;
width:100vw;
// border: 2px solid red;
`

const Logo = styled.img`
padding-left: 40px;
cursor:pointer;
`

const Navbar = styled.div`
// border: 2px solid blue;
height: 60px;
display: flex;
align-items:center;
a{
    padding: 6px 12px;
    text-transform:uppercase;
    font-weight: 700;
    cursor:pointer;
    font-size:13px;
    transition: all 0.2s cubic-bezier(0.2, 0.3, 0.3, 0.2);
    z-index:0;
    &:hover{
        background-color:#00000021;
        opacity:0.85;
        border-radius:12px;
    }
}
`
const RNavbar= styled.div`
display: flex;
align-items:center;
height:60px;
padding-right:50px;
// border: 2px solid green;
a{
    cursor:pointer;
    font-size:13px;
    text-transform: uppercase;
    padding: 6px 12px;
    font-weight: 700;
    &:hover{
        background-color:#00000021;
        opacity:0.85;
        border-radius:12px;
    }
}
`