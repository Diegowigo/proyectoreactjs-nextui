import React from "react";

import { getAllProducts } from "../../services/productServices";

const useProducts = (props) => {
    const [products, setProducts] = React.useState([]);
  
    React.useEffect(() => {
      getAllProducts()
        .then((res) => setProducts(res.data.products))
        .catch((error) => console.error(error));
    }, []);

    export default useProducts