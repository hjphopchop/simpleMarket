import React from 'react'
import cl from '../styles/CartItem.module.css'

const CartItem = ({id,name, imageUrl, price,removeProduct,addCartItem, removeCartItem}) => {
  return (
    <div className={cl.cartItems}>
      
      <div><img src={imageUrl}></img></div>
        <div>{price}</div>
        <button onClick={()=>addCartItem(id)}>+</button>
        <button onClick={()=>removeCartItem(id)}>-</button>
        <button onClick={()=>removeProduct(id)}>delete product</button>
    
       
    </div>
  )
}

export default CartItem