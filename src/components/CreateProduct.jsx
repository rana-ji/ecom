import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { addProduct } from "../actions/productActions";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      image:
        "https://unblast.com/wp-content/uploads/2019/08/Square-Boxes-Mockup-4.jpg",
      quantity: 1,
      // id: Math.floor(Math.random() * 90 + 10),
    };
    dispatch(addProduct(data));
    setTitle("");
    setPrice("");
    navigate("/");
  };

  return (
    <div className="create-product">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
