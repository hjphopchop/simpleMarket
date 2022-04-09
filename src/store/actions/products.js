import  axios  from "axios"

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchProducts =  (category) => async (dispatch) => {
        dispatch({
            type: 'SET_LOADED',
            payload: false,
        });
      const response = await axios.get(`http://localhost:3001/products/?${category !== null ? `category=${category}` : ''}`,)
            dispatch(setProducts(response.data));
        
        
           
      
    }
    
    export const setProducts = (items) => ({
        type: 'SET_PRODUCTS',
        payload: items
        
    })

