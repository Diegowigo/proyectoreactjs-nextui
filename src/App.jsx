import React from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

function App() {
  return (
    <>
      <nav>
        <NavBarComponent />
      </nav>
      <main>
        <div>
          <ItemListContainerComponent greeting={`Bienvenido(a) a Ecommerce!`} />
        </div>
      </main>
    </>
  );
}

export default App;
