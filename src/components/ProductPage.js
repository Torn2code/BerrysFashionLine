import React from 'react';
import ProductCard from './ProductCard';
import './ProductPage.css';


import image1 from '../components/images/collins-lesulie-QNJo7NRczlU-unsplash.jpg';
import image2 from '../components/images/frank-mckenna-8-rErfjcr1k-unsplash.jpg';
import image3 from '../components/images/jorge-barros-lqtnZsmz63U-unsplash.jpg';
import image4 from '../components/images/max-titov-Mhktr6dFD3I-unsplash.jpg';
import image5 from '../components/images/napat-saeng-mVGW8j9rrC4-unsplash.jpg';
import image6 from '../components/images/patrick-hendry-l_SeBO-53dY-unsplash.jpg';
import image7 from '../components/images/rangga-cahya-nugraha-kBRzSkOk6eo-unsplash.jpg';
import image8 from '../components/images/ryan-grice-VKDzcs8kD8E-unsplash.jpg';
import image9 from '../components/images/sourav-ahmmad-fwJMG9zm3dI-unsplash.jpg';
import image10 from '../components/images/balesstudio-EdjNw_eIv68-unsplash.jpg';
import image11 from '../components/images/bridal-ball-gown.jpeg';

const products = [
  { id: 1, name: "Men Striped Wear", description: "Black wear with red and white color strip suitable for men wear.", image: image1, price: 35.99 },
  { id: 2, name: "Rainbow Themed Baby Wear", description: "Amazing Rainbow themed baby wear for 1-2yrs old.", image: image2, price: 25.49 },
  { id: 3, name: "Black Cargo Jacket for Men", description: "Black cargo type jacket for men.", image: image3, price: 55.99 },
  { id: 4, name: "Lady Knee Length Coat", description: "Knee length coat for women comes in different sizes.", image: image4, price: 79.99 },
  { id: 5, name: "Women 2 Piece Wear", description: "Crop top jacket and nice fitted trouser.", image: image5, price: 64.50 },
  { id: 6, name: "Burberry Shirt", description: "Full length Burberry shirt for kids.", image: image6, price: 45.00 },
  { id: 7, name: "Street Style Suit for Ladies", description: "Women street style suit.", image: image7, price: 90.00 },
  { id: 8, name: "FC Cap & Shirt", description: "New FC style cap and shirt.", image: image8, price: 30.00 },
  { id: 9, name: "Buttoned-Neck Shirt", description: "Nice buttoned-neck shirt for your kids.", image: image9, price: 29.99 },
  { id: 10, name: "Floral Girl Coat", description: "Floral styled girl clothing comes in different sizes.", image: image10, price: 70.00 },
  { id: 11, name: "Bridal Ball Gown", description: "Bridal Ball Gown clothing comes in different sizes.", image: image11, price: 70.00 },
  { id: 12, name: "Buttoned-Neck Shirt", description: "Nice buttoned-neck shirt for your kids.", image: image9, price: 29.99 },
];

const ProductPage = ({ addToCart }) => {
  return (
    <div className="product-page">
      <div className="headerh1">
        <h1>New Arrivals</h1>
        <h2>Winter Wears</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
