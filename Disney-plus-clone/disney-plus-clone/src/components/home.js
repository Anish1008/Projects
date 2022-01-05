import React from 'react'
import styled from 'styled-components'
import ImageSlider from './imageslider'
import Viewer from './viewer'

function home() {
    return (
        <Container>
            <ImageSlider/>
            <Viewer/>
        </Container>
    )
}

export default home

const Container= styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
        background-image:url("/images/home-background.png");
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center center;
        background-attachment: fixed;
    overflow:hidden;
`