import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// export the store
export default store;
