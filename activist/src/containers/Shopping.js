import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainerShopping from "./components/checkboxcontainerShopping";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ShoppingCO2 from "./components/ShoppingCO2";

export const Shopping = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Shopping</h3>
          <div className="center">
            {/*<CheckboxContainerShopping />*/}
            <ShoppingCO2 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
