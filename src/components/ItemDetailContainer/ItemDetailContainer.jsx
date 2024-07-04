import React from "react";
import { CartContext } from "../../context/CartContext";

import { Button } from "@nextui-org/react";
import "./ItemDetailContainer.css";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    setQuantity(quantity - 1);
    removeFromCart(product, 1);
  };

  if (!product || !Array.isArray(product.images)) {
    return <LoaderComponent />;
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
      <div>
        <Button onClick={handleRemove}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
