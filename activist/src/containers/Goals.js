import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import food from "./img/food.png";
import set from "./img/set.png";
import bike from "./img/bike.png";
import home from "./img/home.png";
import cart from "./img/cart.png";
import home2 from "./img/home2.png";
import chart from "./img/chart.png";
import Piechart from "./components/Piechart";

export const Goals = () => {
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

      <h3>Congratulations</h3>
      <div className="container2">
        <Piechart />
      </div>
      {/* <Link to="/chart">
          <img src={chart} alt="chart" />
  </Link> */}
      <div className="text">
        <h4>
          You have insisted 20 days
          <br />
          with 6000 kg of CO2 saved!
        </h4>
      </div>

      <div className="container2">
        <button className="circleSmall" id="badges">
          <img src={food} alt="food" />
        </button>
        <button className="circleSmall" id="badges">
          <img src={bike} alt="bike" />
        </button>
      </div>

      <div className="container2">
        <button className="circleSmall" id="badges">
          <img src={home} alt="home" />
        </button>
        <button className="circleSmall" id="badges">
          <img src={cart} alt="cart" />
        </button>
      </div>
    </main>
  );
};
