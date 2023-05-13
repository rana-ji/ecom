import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import CreateProduct from "./components/CreateProduct";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { fetchProducts } from "./actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
