import React from "react";

import { useCollectionItems } from "../hooks/useCollectionItems";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { items, loading } = useCollectionItems("products");

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainerComponent products={items} />
  );
};

export default Home;
