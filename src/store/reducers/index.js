import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import products from "./products"
import filters from "./filters";
import cart from "./cart"

const allReducers = combineReducers({
    counterReducer,
    products,
    filters,
    cart
});

export default allReducers;