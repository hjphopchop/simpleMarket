import React from 'react'
import cl from '../styles/CartItem.module.css'

const CartItem = ({id,name, imageUrl, price,oldPrice, sale,removeProduct,addCartItem, removeCartItem}) => {
  return (
    <div className={cl.cartItems}>
      <div>
      <div className={cl.imageCont}><img src={imageUrl}></img>
           <div className={cl.sale}> {sale} %</div>
           </div> 
           <div className={cl.price}>
             <div className={cl.currentPrice}>{price}</div>
             <div className={cl.oldPrice}>{oldPrice}</div>
             </div>

      </div>
      
      <div>{name}</div>
        <div>{price}</div>
        <button onClick={()=>addCartItem(id)}>+</button>
        <button onClick={()=>removeCartItem(id)}>-</button>
        <button onClick={()=>removeProduct(id)}>удалить</button>
    
       
    </div>
  )
}

export default CartItem