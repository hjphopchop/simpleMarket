import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import cart from '../store/reducers/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalCount} = useSelector(({cart}) => cart)


    const addedProduct = Object.keys(items).map((key)=>{
     return   items[key].items[0];
    }
);
    console.log(addedProduct);
  return (
    <div>
     
        {addedProduct.map((item) => (
          <CartItem {...item} />
        ))}
         <div>{totalCount}</div>


    </div>
  )
}

export default Cart