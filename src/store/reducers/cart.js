

const initialState={
    items:{},
    totalCount:0,
    totalPrice:0
}

const getTotalPrice = (arr) => arr.reduce((sum,obj) => sum +obj.price,0);
const _get=(obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val,key) => {
        return val[key];
    }, obj[firstKey])
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum,obj) =>{
        const value = _get(obj,path);
        return sum + value;
    },0)
}

const cart =(state =initialState,action) => {
   
    switch(action.type){
        case "PRODUCT_TO_CART": 
        const currentProducts =  !state.items[action.payload.id]
        ?[action.payload]
        : [...state.items[action.payload.id].items,action.payload];
        const newProduct = {
            ...state.items,
            [action.payload.id]:{
                items: currentProducts,
                totalPrice: getTotalPrice(currentProducts),
            }
        }

        const totalCount = getTotalSum(newProduct, 'items.length');
        const totalPrice = getTotalSum(newProduct, 'totalPrice').toFixed(2)
        
        return {
          ...state,
          items:newProduct,
          totalCount,
          totalPrice,
            }
           
        
        default: 
        return state 
    }
}

export default cart;