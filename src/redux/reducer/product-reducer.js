import { ActionTypes } from "../action-types/product-types";

const initialState = {
  cart : []
};

export const productsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const addProductToCart = (state =  initialState , { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      const item = payload.id
      const inCart = state.cart.find((item) => item.id === payload.id.id ? true : false);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === payload.id.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.SET_CART:
      return { ...state, ...payload }
    default:
      return state;
  }
};

export const setCart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return { ...state, ...payload }
    default:
      return state;
  }
}
export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};