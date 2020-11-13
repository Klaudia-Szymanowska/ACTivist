import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import set from "./img/set.png";
import home2 from "./img/home2.png";

export const Transportation = () => {
  return (
    <main>
      {/*to be changed by Louise as a component */}
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
        {/*  OPTIONS = ["Compost at home", "Recycle waste at home",
        //"Uselesswater", "Switch off lights"]; */}
      </div>
    </main>
  );
};
