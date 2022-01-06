import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {selectCars} from "../features/car/carSlice"
import {useSelector} from 'react-redux'
function section({title,description, image, leftbtntxt, rightbtntxt}) {
    // const cars = useSelector(selectCars)
    return (
        <>
        <Container bgImage={image}>
            <Fade bottom>

            <Heading>
                <h1>{title} </h1>
                <p>{description}</p>
            </Heading>
            </Fade>
            <Fade bottom>

            <Buttons>
                <Left>{leftbtntxt}</Left>
                {
                    rightbtntxt && 
                    <Right>{rightbtntxt}</Right>

                }
            </Buttons>
            </Fade>
            <Arrowdiv>
            <Downarrow src='/images/down-arrow.svg'/>

            </Arrowdiv>
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
background-image: ${props => `url("/images/${props.bgImage}")`}
    `
    
    const Heading = styled.div`
    h1{
        font-size:40px;
        text-align: center;
        padding-top:20vh;
        opacity:1;
        font-weight:600;
        letter-spacing:1px;
    }
    p{
        text-align: center;
    }
    `
    
    const Buttons = styled.div`
    display:flex;
    justify-content:center;
    height:50px;
    margin-top: 50vh;
    @media(max-width:640px)
    {
        flex-direction:column;
        margin-top:34vh;
        height:130px;
    }
`
const Arrowdiv = styled.div`
height:60px;
display:flex;
justify-content:center;

`
const Downarrow = styled.img`
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
text-transform:uppercase;
font-size:13px;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
height:40px;
width:256px;
text-align:center;
border-radius:100px;
margin-right:26px;
@media(max-width:640px){
    justify-content:center;
    width:100vw;
    margin-bottom: 15px;
}
`
const Right = styled.a`
color:black;
background-color: #ffffffb0;
font-size:13px;
text-transform:uppercase;
opacity:0.85;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
height:40px;
width:256px;
text-align:center;
border-radius:100px;
@media(max-width:640px){
    justify-content:center;
    width:100vw;
    // margin: 10px 0;
}


`