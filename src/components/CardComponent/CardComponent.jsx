import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CardComponent() {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {product.map((item, id) => (
        <Card
          shadow="sm"
          key={id}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.title}
              className="w-full object-cover h-[140px]"
              src={product.brand}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.description}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
