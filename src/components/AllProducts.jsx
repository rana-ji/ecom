import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, deleteProduct } from "../actions/productActions";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [editableProduct, setEditableProduct] = useState(null);

  const handleEdit = (product) => {
    setEditableProduct(product);
  };

  const handleDelete = (product) => {
    console.log(product)
    dispatch(deleteProduct(product.id));
  };

  const handleSave = (product) => {
    dispatch(editProduct(product.id, product));
    setEditableProduct(null);
  };

  const handleCancel = () => {
    setEditableProduct(null);
  };

  console.log(products)
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              {editableProduct && editableProduct.id === product.id ? (
                <>
                  <input
                    type="text"
                    value={editableProduct.title}
                    onChange={(e) =>
                      setEditableProduct({
                        ...editableProduct,
                        title: e.target.value,
                      })
                    }
                  />
                  <input
                    type="number"
                    value={editableProduct.price}
                    onChange={(e) =>
                      setEditableProduct({
                        ...editableProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <button className="button" onClick={() => handleSave(editableProduct)}>
                    Save
                  </button>
                  <button className="button" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                  </Link>
                  <p>Price: ${product.price}</p>
                  <button className="button" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="button" onClick={() => handleDelete(product)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
