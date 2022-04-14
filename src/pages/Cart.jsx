import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import {clearCart, removeCartProduct,addCartItem, removeCartItem} from '../store/actions/cart';

import cl from '../styles/Cart.module.css'

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalCount,totalPrice} = useSelector(({cart}) => cart)

    const onclearCart = () => {
      dispatch(clearCart())
    }

    const onRemoveProduct = (id) => {
      dispatch(removeCartProduct(id))
    }
    const onAddItem = (id) => {
      dispatch(addCartItem(id))
    }
    const onRemoveItem = (id) => {
      dispatch(removeCartItem(id))
    }


    const addedProduct = Object.keys(items).map((key)=>{
     return   items[key].items[0];
    }
);
    
  return (
    <div> 
      {totalCount ? (
        <div>  <button className={cl.delete} onClick={onclearCart}>очистить корзину</button>
       {addedProduct.map((item) => (
          
        <CartItem 
        {...item} 
        removeProduct = {onRemoveProduct}
        addCartItem = {onAddItem}
        removeCartItem = {onRemoveItem}
        />
      ))
       }
      
      <div>{totalCount}</div>
         <div>{totalPrice}</div>
       
        </div>
      )
      :
     ( <div>В корзине пусто </div>)}
         


    </div>
  )
}

export default Cart