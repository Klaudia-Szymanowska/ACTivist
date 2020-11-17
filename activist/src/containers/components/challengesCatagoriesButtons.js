import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import food from "../../img/food.png";
import bike from "../../img/bike.png";
import home from "../../img/home.png";
import cart from "../../img/cart.png";

export default class ChallengesCatagoriesButtons extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/food">
            <button id="challbutton">
              <img src={food} id="imgchall" alt="food" /> Food{" "}
            </button>
          </Link>
        </div>
        <div>
          <Link to="/transportation">
            <button id="challbutton">
              <img src={bike} id="imgchall" alt="bike" /> Transportation{" "}
            </button>
          </Link>
        </div>
        <div>
          <Link to="/household">
            <button id="challbutton">
              <img src={home} id="imgchall" alt="home" /> Household{" "}
            </button>
          </Link>
        </div>
        <div>
          <Link to="/shopping">
            <button id="challbutton">
              <img src={cart} id="imgchall" alt="cart" /> Shopping{" "}
            </button>
          </Link>
        </div>
        <div>
          <button className="button2"> I will choose later </button>
        </div>
      </div>
    );
  }
}
