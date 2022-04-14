const initialState ={
    category: null,
    sort:{
        type: 'price',
        order: 'esc',
}
}

const filters = (state=initialState, action) => {
    switch(action.type) {
        case "SET_CATEGORY": 
        return {
            ...state,
            category:action.payload
        }

        case "SET_SORT": 
        return{
            ...state,
            sort:action.payload,
        }
       
        default:
            return state
            
            
    }
}
export default filters;