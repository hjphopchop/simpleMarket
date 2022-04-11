const initialState={
    items:{},
}

const cart =(state =initialState,action) => {
   
    switch(action.type){
        case "PRODUCT_TO_CART": 
        
        return {
            
           items:{
            ...state.items,
            [action.payload.id]: 
               !state.items[action.payload.id]
               ?[action.payload]
               : [...state.items[action.payload.id],action.payload]
           },
           
        };
        default: 
        return state 
    }
}

export default cart;