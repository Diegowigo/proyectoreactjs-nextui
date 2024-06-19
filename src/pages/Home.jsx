import React from "react";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();

  return <ItemListContainerComponent products={products} />;
};

export default Home;
