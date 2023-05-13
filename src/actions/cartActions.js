import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

// action to add item in cart
export const addToCart = (item) => {
  console.log("working",item)
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

// action to delete item from cart
export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};


