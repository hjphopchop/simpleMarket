export const toCart = (obj) => ({
    type:'PRODUCT_TO_CART',
    payload: obj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removeCartProduct = (id) => ({
    type: 'REMOVE_CART_PRODUCT',
    payload: id
})

export const addCartItem = (id) => ({
    type: 'ADD_CART_ITEM',
    payload:id
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload:id
})
