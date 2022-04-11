import React from 'react'
import cl from '../styles/ProductItem.module.css'

const ProductItem = ({id,name, imageUrl,price, clickProduct}) => {

const onAddProduct = () => {
  const obj = {
    id,
    name,
    imageUrl,
    price,
   
  }
  clickProduct(obj)
}

  return (
        <div className={cl.product}>
           <div><img src={imageUrl}></img></div> 
        <div>{name}</div>
        <div>{price}</div>
        <button onClick={onAddProduct}>купить</button>
        </div>
        
        
        
       
    
  )
}



export default ProductItem