import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function imageslider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <Carousel {...settings} button="<">
            <Wrap>
                <img src='/images/slider-badging.jpg'/>
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg'/>
            </Wrap>
            <Wrap>
                <img src='/images/slider-badging.jpg'/>
            </Wrap>
        </Carousel>
        
    )
}

export default imageslider

const Carousel= styled(Slider)`
    margin-top:20px;
    cursor:pointer;
    &:hover {.slick-prev:before,.slick-next:before{
        display:block;
    }}
    ul li button{
        &:before{
        font-size:10px;
        color: white;
        }
    }
    li.slick-active button::before{
        color:rgb(150,158,171);
    }
    button{
        background-color:transparent;
        z-index:1;
    }
.slick-prev{
    left: calc(-3.5vw - 5px);
    width:55px;
    height:96%;
}
.slick-prev:before{
    display:none;
    font-family: "Font Awesome 5 Free";
    font-size:40px;
    font-weight: 900; 
    content: "\f053";
    height:50px;
}
.slick-next{
    right: calc(-3.5vw - 5px);
    width:55px;
    height:96%;
}
.slick-next:before{
    display:none;
    font-family: "Font Awesome 5 Free";
    font-size:40px;
    font-weight: 900; 
    content: "\f054";
    height:50px;
}
    .slick-list{
        overflow: visible;
    }
`
const Wrap= styled.div`
    img{
        border: 4px solid transparent;
        width:100%;
        height:100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    }

`