import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainerShopping from "./components/checkboxcontainerShopping";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Shopping = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Food</h3>
          <div className="center">
            <CheckboxContainerShopping />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
