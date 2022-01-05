import React from 'react'
import styled from 'styled-components'
function section() {
    return (
        <Container>
            <Heading>
                <h1>Model S</h1>
                <p>Order online for <a>Touchless delivery</a></p>
            </Heading>
            <Buttons>
                <Left>Custom Order</Left>
                <Right>Existing Inventory</Right>
            </Buttons>
            <Downarrow src='/images/down-arrow.svg'/>
        </Container>
    )
}

export default section


const Container = styled.div`
    background-image: url("/images/model-s.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    width:100vw;
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    `
    
    const Heading = styled.div`
    h1{
        font-size:40px;
        // text-transform:uppercase;
        text-align: center;
        top:50px;
        transform: translateY(-20px);
        opacity:1;
        font-weight:600;
    }
    p{
        text-align: center;
        transform: translateY(-10px);
        a{
            cursor: pointer;
            &:hover{
                text-decoration:underline;
            }
        }
    }
`

const Buttons = styled.div`
transform:translateY(500%);
display:flex;
justify-content:center;
height:50px;
`
const Downarrow = styled.img`
    height:60px;
    display:inline-block;
    position:fixed;
    bottom:0px;
    left:50vw;
`
const Left = styled.a`
color:white;
display:block;
font-weight:200;
border:2px solid black;
height:20px;
width:40px;

`
const Right = styled.a`


`