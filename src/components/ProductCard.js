import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="product-card">
      <div className="banner-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="container">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="button-wrapper">
          <button className="btn outline" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
          <button className="btn fill" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
