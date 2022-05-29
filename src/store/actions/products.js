import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchProducts = (category, sort) => async (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  const response = await axios.get(
    `https://marketbackk.herokuapp.com/products/?${
      category !== null ? `category=${category}` : ""
    }&_sort=${sort.type}&_order=${sort.order}`
  );
  dispatch(setProducts(response.data));
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});
