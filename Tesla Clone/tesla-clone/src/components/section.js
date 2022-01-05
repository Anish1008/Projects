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

    `
    
    const Heading = styled.div`
    h1{
        font-size:40px;
        // text-transform:uppercase;
        text-align: center;
        padding-top:20vh;
        opacity:1;
        font-weight:600;
    }
    p{
        text-align: center;
        a{
            cursor: pointer;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    `
    
    const Buttons = styled.div`
    display:flex;
    justify-content:center;
    height:50px;
    // width:100px;
    margin-top: 50vh;
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
background-color: rgba(23, 26, 32, 0.8);
opacity:0.85;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-weight:200;
// border:2px solid black;
height:40px;
width:256px;
text-align:center;
border-radius:100px;
margin-right:26px;
`
const Right = styled.a`
color:black;
background-color: #ffffffb0;
opacity:0.85;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-weight:200;
// border:2px solid black;
height:40px;
width:256px;
text-align:center;
border-radius:100px;


`