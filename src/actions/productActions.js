import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/actionTypes";
import apiService from "../services/apiService";

// action to fetch all products from the api
export const fetchProducts = () => {
  return (dispatch) => {
    apiService
      .getProducts()
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error)
      });
  };
};

// action to add a product to product item
export const addProduct = (newProduct) => {
  return (dispatch) => {
    apiService
      .createProduct(newProduct)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error)
      });
  };
};

// action to edit a product
export const editProduct = (productId, updatedProduct) => {
  return (dispatch) => {
    apiService
      .updateProduct(productId, updatedProduct)
      .then((response) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error)
      });
  };
};

// action to delete a product
export const deleteProduct = (productId) => {
  return (dispatch) => {
    apiService
      .deleteProduct(productId)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: productId,
        });
        // Show success notification
      })
      .catch((error) => {
        // Handle error
        console.log(error)
      });
  };
};
