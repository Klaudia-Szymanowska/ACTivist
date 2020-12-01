import React from "react";
import "./App.css";
import CheckboxTest1 from "./components/checkboxtest1";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Food = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Food</h3>
          <div className="center">
            {/*<CheckboxContainer />*/}
            <CheckboxTest1 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
