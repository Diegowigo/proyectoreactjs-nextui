import React from "react";

import { getAllProductsByCategory } from "../services/productServices";

export const useProductsByCategory = (category) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllProductsByCategory(category)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return { products, loading };
};
