import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice"
import {useSelector} from 'react-redux'
function Header() {
    let [status,setStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <>
        <Container>
            <LogoContainer>

            <Logo src="/images/logo.svg"/>
            </LogoContainer>
            <Navbar>
                { cars && cars.map((car,index) =>(
                    <a key={index} href="/">{car}</a>

                ))}
                <a href="/">Solar Roof</a>
                <a href="/">Solar Panels</a>
            </Navbar>
            <RNavbar>

            <RNavbari>
                <a href="/">Shop</a>
                <a href="/">account</a>
            </RNavbari>
            <RNavbara>
                <a onClick={() => setStatus(true)} >Menu</a>

            </RNavbara>
            </RNavbar>
            <Sidebar show={status}>
                <Closediv>
                    <Close onClick={() => setStatus(false)}/>
                </Closediv>
                <NavItems>
                { cars && cars.map((car,index) =>(
                    <a key={index} href="/">{car}</a>

                ))}
                    <a href="/">Solar Roof</a>
                    <a href="/">Solar Panels</a>
                </NavItems>
                <NavItemsII>

                    <a href="/">Existing Inventory</a>
                    <a href="/">Used Inventory</a>
                    <a href="/">Trade-In</a>
                    <a href="/">Test Drive</a>
                    <a href="/">CyberTruck</a>
                    <a href="/">Roadster</a>
                    <a href="/">Semi</a>
                    <a href="/">Charging</a>
                    <a href="/">Powerwall</a>
                    <a href="/">Comercial Energy</a>
                    <a href="/">Utilities</a>
                    <a href="/">Find Us</a>
                    <a href="/">Support</a>
                    <a href="/">Investor Relations</a>
                </NavItemsII>
            </Sidebar>
        </Container>
        </>

)
}

export default Header

const Container = styled.div`
position:fixed;
top:0;
display:flex;
align-items: center;
justify-content: space-between;
height: 60px;
width:100%;
// border: 2px solid red;
z-index:10;
transition: all 2s ease;

@media(max-width: 1200px ){
    justify-content:flex-start !important;
}
`
const LogoContainer = styled.div`
display:inline-block;
@media(max-width: 1200px ){
    flex:0.9;
}
`
const Logo = styled.img`
padding-left: 2vw;
cursor:pointer;
`

const Navbar = styled.div`
height: 60px;
width:47.5vw;
display: flex;
padding-left:11vw;
align-items:center;
a{
    padding: 6px 15px;
    text-transform:uppercase;
    font-weight: 700;
    cursor:pointer;
    font-size:13px;
    border-radius:12px;
    transition: all 0.2s cubic-bezier(0.2, 0.3, 0.3, 0.2);
    z-index:0;
    &:hover{
        background-color:#00000021;
        opacity:0.85;
    }
}
@media(max-width: 1200px ){
    display:none;
}
`
const RNavbar= styled.div`
display: flex;
align-items:center;
height:60px;
width:243px;
a{
    display:inline-block;
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
const RNavbara = styled.div`
display:inline-bock;
    @media(max-width:1200px){
        position:absolute;
        right:0;
        background-color:#00000021;
        opacity:0.85;
        border-radius:12px;

    }


`
const RNavbari = styled.div`
display:inline-block;
    @media(max-width:1200px){
        display:none;
    }

`


const Sidebar=styled.div`
position:fixed;
z-index:12;
// border:1px solid red;
background-color:white;
box-sizing: border-box;
padding-left:45px;
top:0;
transition: all 0.6s ease;
right:0;
bottom:0;
transform:${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
overflow-y:scroll;
    width:300px;
        
 `
const Close = styled(CloseIcon)`
    cursor:pointer;
    `
    const NavItems = styled.div`
    display:flex;
    flex-direction:column;
    a{
        box-sizing:border-box;
        display:block;
        padding: 6px 0;
        margin: 5.6px 0;
        // border: 1px solid black;
        cursor: pointer;
        font-size:15px;
        padding-left:12px;
        width:85%;
        border-radius:10px;
        transition: all 0.6s ease;
        &:hover{
            background-color:#3a353517;
            opacity:0.85;
            
        }
        @media(min-width:1200px){
            display:none;

        }  
        
        
        `
        const NavItemsII = styled.div`
        
        display:flex;
    flex-direction:column;
    a{
        box-sizing:border-box;
        display:flex;
        padding: 6px 0;
        margin: 5.6px 0;
        // border: 1px solid black;
        cursor: pointer;
        font-size:15px;
        padding-left:12px;
        width:85%;
        border-radius:10px;
        transition: all 0.6s ease;
        &:hover{
            background-color:#3a353517;
            opacity:0.85;
            
        }
    }
    `
    const Closediv = styled.div`
        height:30px;
        margin:25px 0;
        display:flex;
        justify-content:flex-end;
        padding-right:15px;
        align-items:bottom;
    
    `