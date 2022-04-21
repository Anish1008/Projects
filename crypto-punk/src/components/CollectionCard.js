import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'
function CollectionCard({id,name,image,traits}) {
  return (
    <div className='collectionCards'>
        <img src={image} alt='image'/>
        <div className='details'>
            <div className='name'>{name}</div>
            <div className='id'>.#{id}</div>
            <div className='priceContainer'>
              <img src={weth} className='wethImage' alt='weth'/>
              <div className='price'>{traits[0]?.value}</div>
            </div>

        </div>
    </div>
  )
}

export default CollectionCard