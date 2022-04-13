import React from 'react'
import cl from '../styles/ProductItem.module.css'

const ProductItem = ({id,name, imageUrl,price,oldPrice,sale, clickProduct}) => {

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
           <div className={cl.imageCont}><img src={imageUrl}></img>
           <div className={cl.sale}> {sale} %</div>
           </div> 
           <div className={cl.price}>
             <div className={cl.currentPrice}>{price}</div>
             <div className={cl.oldPrice}>{oldPrice}</div>
             <button className={cl.button} onClick={onAddProduct}>+</button>
           </div>
        <div>{name}</div>
        
        
        
        </div>
        
        
        
       
    
  )
}



export default ProductItem