import React from "react";
import { CartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const { cart } = React.useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className="iconStyles" />
      <span className="iconStyles">{totalItems}</span>
    </div>
  );
};

export default CartWidgetComponent;
