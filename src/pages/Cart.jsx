import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cart from '../store/reducers/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const {items} = useSelector(({cart}) => cart)


    const addedProduct = Object.keys(items).map((item)=>{
     return   items[item].items[0];
    }
);
    console.log(addedProduct);
  return (
    <div>
        88
    </div>
  )
}

export default Cart