import React from "react";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { getAllProducts } from "../../services/productServices";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = (props) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="itemListContainer">
      {products.map((product, id) => (
        <Card
          shadow="sm"
          key={id}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible pt-3">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.title}
              className="w-full object-cover h-[140px]"
              src={product.thumbnail}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.description}</b>
            <p className="text-default-500">{product.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainerComponent;
