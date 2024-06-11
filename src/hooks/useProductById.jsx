import React from "react";
import { getAllProductsById } from "../services/productServices";

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    getAllProductsById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return { product };
};
