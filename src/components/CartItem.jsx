import React from 'react'
import cl from '../styles/CartItem.module.css'

const CartItem = ({name, imageUrl, price}) => {
  return (
    <div className={cl.cartItems}>
      
      <div><img src={imageUrl}></img></div>
        <div>{price}</div>
    
       
    </div>
  )
}

export default CartItem