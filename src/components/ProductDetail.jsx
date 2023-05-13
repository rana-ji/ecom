import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
