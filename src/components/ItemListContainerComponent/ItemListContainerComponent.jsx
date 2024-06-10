import React from "react";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({ products }) => {
  return (
    <div className="itemListContainer pt-4 pr-4 pl-4">
      {products.map((product, id) => (
        <Card
          shadow="sm"
          key={id}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible pt-3 place-content-center">
            <Image shadow="sm" alt={product.title} src={product.thumbnail} />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.description}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainerComponent;
