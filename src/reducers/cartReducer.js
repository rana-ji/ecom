// cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // add item to cart
    case ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item already exists, increment the quantity by 1
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    // remove item form cart
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
