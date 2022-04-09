import React from 'react'
import cl from '../styles/ProductItem.module.css'

const ProductItem = (props) => {
  return (
        <div className={cl.product}>
           <div><img src={props.imageUrl}></img></div> 
        <div>{props.name}</div></div>
        
        
       
    
  )
}

export default ProductItem