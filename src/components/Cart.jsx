import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleRemoveCart(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
