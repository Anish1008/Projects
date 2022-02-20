import React from 'react'
import ProductComponents from './ProductComponents';
import { useSelector } from 'react-redux'
import {selectProduct} from '../features/products/productSlice'
function ProductListing() {
  return (
    <div className='ui grid container'>
        <ProductComponents/>
    </div>
  )
}

export default ProductListing