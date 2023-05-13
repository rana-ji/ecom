import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/actionTypes";

const initialState = {
  products: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetching all product
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    // adding new product
    case ADD_PRODUCT:
      // Handle adding a new product
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    // editing specific product
    case EDIT_PRODUCT:
      // Handle updating a specific product
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                title: action.payload.title,
                price: action.payload.price,
              }
            : product
        ),
      };

    // deleting a product
    case DELETE_PRODUCT:
      // Handle deleting a specific product
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
