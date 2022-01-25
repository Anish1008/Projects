import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './imageslider'
import Movies from './movies'
import Viewer from './viewer'
import db from '.././firebase'
import {useDispatch} from "react-redux"
import {setMovies} from "../features/movies/movieSlice"
function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies=snapshot.docs.map((doc)=>{
                return{id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies))
        })
    },[])
    return (
        <Container>
            <ImageSlider/>
            <Viewer/>
            <Movies/>    
        </Container>
    )
}

export default Home

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