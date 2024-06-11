import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import { useProductsByCategory } from "../hooks/useProductsByCategory";

const Category = () => {
  const { id } = useParams();
  const products = useProductsByCategory(id);

  return <ItemListContainerComponent products={products} />;
};

export default Category;
