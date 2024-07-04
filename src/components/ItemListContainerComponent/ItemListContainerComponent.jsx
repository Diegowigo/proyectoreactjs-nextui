import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div key="item-list" className="flex-wrap p-4">
      {products.map((product, id) => {
        const handlePress = () => {
          navigate(`/item/${product.id}`);
        };
        return (
          <Card
            className="max-w-72"
            shadow="sm"
            key={id}
            isPressable
            onPress={handlePress}
          >
            <CardBody className="overflow-visible pt-3 place-content-center">
              <Image
                className="max-h-72"
                shadow="sm"
                alt={product.title}
                src={product.thumbnail}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{product.description}</b>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainerComponent;
