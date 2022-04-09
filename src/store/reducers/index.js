import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import products from "./products"
import filters from "./filters";

const allReducers = combineReducers({
    counterReducer,
    products,
    filters,
});

export default allReducers;