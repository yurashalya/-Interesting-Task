import React from 'react';

export const MainProduct = ({ id, image, name, price }) => (
    <div key={id} className="product-main">
      <div className="products-img">
        <div className="products-details">
          product details 
        </div>
        <div className="products-pick">
          pick this
        </div>
        <img src={image} className="img"/>
      </div>
      <div className="products-content">
        <p className="products-title">{name}</p>
        <p className="products-price">Starting at {price}</p>
      </div>
    </div>
)

export default MainProduct;