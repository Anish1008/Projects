import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/fade'
function section({title,description, image}) {
    // console.log({image})
    return (
        <>
        <Container bgImage={image}>
            <Fade>

            <Heading>
                <h1>{title}</h1>
                <p>{description}</p>
            </Heading>
            </Fade>
            <Fade>

            <Buttons>
                <Left>Custom Order</Left>
                <Right>Existing Inventory</Right>
            </Buttons>
            </Fade>
            <Downarrow src='/images/down-arrow.svg'/>
        </Container>
        </>
    )
}

export default section


const Container = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position:center;
height:100vh;
width:100vw;
// border: 2px solid red;
background-image: ${props => `url("/images/${props.bgImage}")`}
    `
    
    const Heading = styled.div`
    h1{
        font-size:40px;
        // text-transform:uppercase;
        text-align: center;
        padding-top:20vh;
        opacity:1;
        font-weight:600;
        letter-spacing:1px;
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
    left:47vw;
    animation-name:"bounce";
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    @keyframes bounce{
        0%,34%,68%,100%{
            transform:translateY(0%);
        }
        17%,51%{
            transform:translateY(-20%);
        }
    }
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