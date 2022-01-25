import React,{useEffect} from 'react'
import styled from "styled-components"
import {auth,provider,onAuthStateChanged} from "../firebase"
import {selectUserName,selectUserPhoto,setUserLogin,setUserLogOut} from '../features/users/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
function Header() {
    const history=useNavigate();
    const dispatch = useDispatch();
    const UserName=useSelector(selectUserName);
    const UserPhoto=useSelector(selectUserPhoto);
    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                history("/");
            }
        })
    },[])
    const handleAuth= () => {
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            history("/");
        }).catch((error)=>{
            alert(error.message);
        })
    }
    const signOut= () =>{
        auth.signOut().then(()=>{
            dispatch(setUserLogOut());
            history("/login");
        })
    }
    return (
        <Nav>
            <a>
                <Logo src='/images/logo.svg'/>
            </a>
            {
                !UserPhoto ?
                (<LoginContainer onClick={handleAuth}>
                    <Login>Login</Login>
                </LoginContainer>) :

                <>
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
                <UserPic>
                <UserImg  src={UserPhoto}/>
                <Dropdown onClick={signOut}><span>Sign Out</span></Dropdown>
                </UserPic>
            </>
                
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
background-color: #090b13;
height:70px;
display: flex;
align-items: center;
padding: 0px 50px;
overflow: hidden;
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
    @media (max-width: 920px)
    {
        display:none;
    }
`



const Login = styled.div`
    border: 1px solid #f9f9f9;
    border-radius:4px;
    padding: 8px 16px;
    text-transform:uppercase;
    letter-spacing: 1.5px;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor:pointer;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`

const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;

`

const Dropdown = styled.div`
position:absolute;
    cursor:pointer;
    top:52px;
    // right:10px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    padding:10px;
    font-size:14px;
    text-align:center;
    letter-spacing:3px;
    width:110px;
    opacity:0;
    z-index:10;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    `
const UserPic = styled.div`
    position:absolute;
    right:52px;
    // flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    // justify-content: flex-end;
    // width:70px;
    // border:2px solid red;
        &:hover{
            ${Dropdown} {
                opacity:1 !important;
            }
        }
    `
    const UserImg= styled.img`
    height:48px;
    display:block;
    width:48px;
    border-radius:50%;
    cursor: pointer;
    
`