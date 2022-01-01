import React from 'react'
import styled from "styled-components"
function header() {
    return (
        <Nav>
            <a>
                <Logo src='/images/logo.svg'/>
            </a>
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg'/>
                    <span>Home</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg'/>
                    <span>Search</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg'/>
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg'/>
                    <span>Orignals</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg'/>
                    <span>Movies</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg'/>
                    <span>Series</span>
                </a>

            </NavMenu>
            <UserImg src='https://media-exp1.licdn.com/dms/image/C4E03AQFlTxNL2fKj8A/profile-displayphoto-shrink_200_200/0/1638265288740?e=1646265600&v=beta&t=UE-5v4c2TPYvTqB3PjBIZ6w2FMG_pDfI17R_ymkeByg'/>
        </Nav>
    )
}

export default header

const Nav = styled.nav`
background-color: #090b13;
height:70px;
display: flex;
align-items: center;
padding: 0px 50px;
`

const Logo = styled.img`
height:40px;
cursor:pointer;

`

const NavMenu=styled.div`
    display:flex;
    flex:1;
    padding: 0 20px;
    a{
        // background-color: white;
        display:flex;
        padding: 0 15px;
        align-items: center;
        cursor:pointer;
        transition: all 2s ease-out;
        img{
            height:20px;
        }
        span{
            display: inline-block;
            position: relative;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing:1.42px;
            overflow:hidden;
        }
        span::before{
            background-color:white;
            content: "";
            position:absolute;
            width:0%;
            height: 10%;
            bottom:0px;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
        span:hover:: before{
            width:99%;
            height:10%;
        }
    }

`

const UserImg= styled.img`
    height:48px;
    width:48px;
    border-radius:50%;
    cursor: pointer;
`