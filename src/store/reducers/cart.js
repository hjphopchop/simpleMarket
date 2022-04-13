const initialState={
    items:{},
    totalCount:0,
    totalPrice:0
}

const getTotalPrice = (arr) => arr.reduce((sum,obj) => sum +obj.price,0);

const cart =(state =initialState,action) => {
    switch(action.type){
        case "PRODUCT_TO_CART": {
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
        const objKeys = Object.keys(newProduct);

        const totalCount = objKeys.reduce(
            (sum, key) => newProduct[key].items.length + sum, 0
        );

        const totalPrice = objKeys.reduce(
            (sum, key) => newProduct[key].totalPrice + sum, 0
        ).toFixed(2);

        return {
          ...state,
          items:newProduct,
          totalCount,
          totalPrice,
            }
        }

        case "CLEAR_CART": 
        return {
            totalPrice:0,
            totalCount: 0,
            items: {}
        }

        case "REMOVE_CART_PRODUCT": {
            const newProduct = {
                ...state.items
            };
            const currentTotalPrice = newProduct[action.payload].totalPrice;
            const currentTotalCount = newProduct[action.payload].items.length;
            delete newProduct[action.payload];
            return {
                ...state,
                items:newProduct,
                totalPrice: (state.totalPrice - currentTotalPrice).toFixed(2),
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'ADD_CART_ITEM':{
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];
            const newProduct = {
                ...state.items,
                [action.payload] : {
                    items: newObjItems,
                    totalPrice:getTotalPrice(newObjItems)
                }
            }
            const objKeys = Object.keys(newProduct);
            const totalCount = objKeys.reduce(
                (sum, key) => newProduct[key].items.length + sum, 0
            );
    
            const totalPrice = objKeys.reduce(
                (sum, key) => newProduct[key].totalPrice + sum, 0
            ).toFixed(2);

            return{
                ...state,
                items: newProduct,
                totalCount,
                totalPrice
            }
        }

        case 'REMOVE_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems = 
            oldItems.length > 1 
            ? state.items[action.payload].items.slice(1) 
            : oldItems;
            const newProduct = {
                ...state.items,
                [action.payload]:{
                    items:newObjItems,
                totalPrice: getTotalPrice(newObjItems),
            }
        }
        const objKeys = Object.keys(newProduct);
            const totalCount = objKeys.reduce(
                (sum, key) => newProduct[key].items.length + sum, 0
            );
    
            const totalPrice = objKeys.reduce(
                (sum, key) => newProduct[key].totalPrice + sum, 0
            ).toFixed(2);

            return {
                ...state,
                items: newProduct,
                totalCount,
                totalPrice
            }
        }
           
        default: 
        return state 
    }
}

export default cart;