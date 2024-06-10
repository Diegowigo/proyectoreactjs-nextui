import React from "react";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();

  return (
    <div>
      <ItemListContainerComponent products={products} />
    </div>
  );
};

export default Home;
