import React from "react";

import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ product }) => {
  if (!product || !Array.isArray(product.images)) {
    return <div>Producto no disponible</div>;
  }

  return (
    <div className="item-detail-container">
      {product.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={product.title}
          className="product-image"
        />
      ))}
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
