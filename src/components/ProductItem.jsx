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
           </div>
        <div>{name}</div>
        
        <button onClick={onAddProduct}>купить</button>
        
        </div>
        
        
        
       
    
  )
}



export default ProductItem