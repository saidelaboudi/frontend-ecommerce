import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoriesReducer, addProductToCart } from "./product-reducer";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: addProductToCart,
});
export default reducers;