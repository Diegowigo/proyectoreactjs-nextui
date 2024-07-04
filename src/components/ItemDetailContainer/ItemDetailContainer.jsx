import React from "react";
import { CartContext } from "../../context/CartContext";

import { Button } from "@nextui-org/react";

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

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {product.images ? (
          product.images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={product.title}
                style={{ width: 100, height: 100 }}
              />
            );
          })
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: 100, height: 100 }}
          />
        )}
      </div>
      <div style={{ marginLeft: 100 }}>
        <h1 style={{ fontWeight: "500", fontSize: "20px" }}>{product.title}</h1>
        <p style={{ paddingBottom: "10px" }}>{product.description}</p>
        <p style={{ color: "green", fontWeight: "500" }}>${product.price}</p>
      </div>
      <div style={{ margin: "20px" }}>
        <Button onClick={handleRemove}>-</Button>
        <span style={{ margin: "5px" }}>{quantity}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
