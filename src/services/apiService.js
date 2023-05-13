// apiService.js
import axios from "axios";

const API_URL = "https://my-json-server.typicode.com/rana-ji/db-repo";

const apiService = {
  // api request to create a product
  createProduct: (newProduct) => {
    return axios.post(`${API_URL}/products`, newProduct);
  },
  // api rewuest to get products
  getProducts: () => {
    return axios.get(`${API_URL}/products`);
  },
  // api rewuest to update a product
  updateProduct: (productId, updatedProduct) => {
    return axios.put(`${API_URL}/products/${productId}`, updatedProduct);
  },
  // api reqiest to delete a product
  deleteProduct: (productId) => {
    return axios.delete(`${API_URL}/products/${productId}`);
  },
};

export default apiService;
