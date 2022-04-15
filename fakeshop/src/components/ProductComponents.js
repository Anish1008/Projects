import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../features/products/productSlice'
import {selectProduct} from '../features/products/productSlice'
import {Link} from "react-router-dom"
function ProductComponents() {
  const products=useSelector(selectProduct);
  const dispatch = useDispatch()
  const fetchProducts=()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      console.log(res);
    let temp=res.data.map((pro)=>{
      return(pro)
    })
    dispatch(setProduct(temp))
    })
  }
  
  useEffect(()=>fetchProducts(),[]);
  console.log(products);
  // products.map((pro)=>console.log(pro.id))
  return (
      products.map((p)=>{
        return(<div className='four wide column' key={p.id} >
          <Link to={`/product/${p.id}`}>
        <div className="ui cards link ">
          <div className="ui card">
            <div className="image" height={100}>
              <img src={p.image} alt={p.title}/>
            </div>
            <div className="content">
                 <div className="header" >{p.title}</div>
                 <div className="meta price" >$ {p.price}</div>
                 <div className="meta" >{p.category}</div>
                  </div>
                  </div>
                  </div>
                  </Link>
                  </div>
      )})
  )
}

export default ProductComponents