import React from "react";
import { ring2 } from "ldrs";

const LoaderComponent = () => {
  ring2.register();
  return (
    <div
      style={{
        width: "100%",
        height: "50%",
        margin: "auto",
        color: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ring2 size="60" speed="1.5" color="black"></ring2>
    </div>
  );
};

export default LoaderComponent;
