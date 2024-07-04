import React from "react";
import { grid } from "ldrs";
const LoaderComponent = () => {
  grid.register();
  return (
    <div
      style={{
        width: "100%",
        height: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20rem",
      }}
    >
      <l-grid size="60" speed="1.5" color="black"></l-grid>
    </div>
  );
};

export default LoaderComponent;
