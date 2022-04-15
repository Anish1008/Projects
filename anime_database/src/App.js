import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home.js'
import './App.css';
import Sidebar from './components/Sidebar.js'
import Main from './components/MainContent.js'
function App() {
  const [AnimeList,setAnimeList]=useState([]);
  const [topAnime,setTopAnime]=useState([]);
  const [search,setSearch]=useState('');
  const fetchAnime=async ()=>{
    await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity').then((res)=>{
    let temp=res.data.top;
    setTopAnime(temp.slice(0,5))
  })
}
  useEffect(()=>fetchAnime(),[])
  console.log(topAnime)
  return (
    <div >
    <Home/>
    <div className='content-wrap'>
    <Sidebar topAnime={topAnime}/>
    <Main/>
    </div>
    </div>
  );
}

export default App;
