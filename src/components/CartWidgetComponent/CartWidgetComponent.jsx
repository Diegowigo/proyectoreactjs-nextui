import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className="iconStyles" />
      <span className="iconStyles">0</span>
    </div>
  );
};

export default CartWidgetComponent;
