import { ActionTypes } from '../action-types/product-types';

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (item) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      id: item,
    },
  };
};

export const setCart = (cart) => {
  return{
    type : ActionTypes.SET_CART,
    payload : cart,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};