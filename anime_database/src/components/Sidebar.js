import React, { useState } from 'react'

function Sidebar({topAnime}) {
    console.log(topAnime)
  return (

    <aside>
        <nav>
            <h3>Top Anime</h3>
            {
                topAnime.map((top=>{

            return(
            <div key={top.mal_id}>
            <a href={top.url} target='_blank' rel='noreferrer'>
                {top.title}
            </a>
            </div>
                )}))
            }

            
        </nav>
    </aside>
    // <></>
  )
}

export default Sidebar