import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainerHousehold from "./components/checkboxcontainerHousehold";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Household = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Food</h3>
          <div className="center">
            <CheckboxContainerHousehold />
          </div>
        </div>
        );
      </div>
    </main>
  );
};

/*import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import set from "./img/set.png";
import home2 from "./img/home2.png";

export const Transportation = () => {
  return (
    <main>
      <div>
        <Link to="/settings">
          <img
            className="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
        <div>
          <Link to="/home">
            <img
              className="column"
              src={home2}
              style={{ width: "5%", float: "left" }}
              alt="set"
            />
          </Link>
        </div>
      </div>

      <div className="text">
        <h3>Household</h3>
        { OPTIONS = ["Compost at home", "Recycle waste at home",
        //"Uselesswater", "Switch off lights"]; }
      </div>
    </main>
  );
};
*/
