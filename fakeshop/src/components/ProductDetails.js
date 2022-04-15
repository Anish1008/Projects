import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, selectingProduct } from '../features/products/productSlice';
function ProductDetails() {
    const {productId} = useParams();
    const product= useSelector(selectedProduct)
    const dispatch = useDispatch()
    // console.log(productId)
useEffect( ()=>{
     axios.get(`https://fakestoreapi.com/products/${productId}`).then(
        (res)=>{
              dispatch(selectingProduct(res.data))
        })

},[productId])
console.log(product)
  return (
            <div className='ui grid container'>
                {product && <div className='ui placeholder segment'>
                <div className='ui vertical divider'></div>
                <div className='middle aligned row'>
                    <div className='column lp'>
                        <img className='ui fluid image' src={product.image}/>
                    </div>
                    <div className='column rp'>
                        <h1>{product.title}</h1>
                        <h2>
                            <a className='ui teal tag label'>$ {product.price}</a>
                        </h2>
                        <h3 className='ui brown block header'>{product.category}</h3>
                        <p>{product.description}</p>
                        <div className='ui vertical animated button' tabIndex="0">
                            <div className='hidden content'>
                                <i className='shop icon'></i>
                            </div>
                            <div className='visible content'>Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>}

            </div> 
            // <>
            // <div >
                
            //     <img src={product.image}/>
            // </div>
            // </>
)}

export default ProductDetails