import { combineReducers } from "redux";
import { productsReducer,  categoriesReducer, addProductToCart } from "./product-reducer";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: addProductToCart,
});
export default reducers;