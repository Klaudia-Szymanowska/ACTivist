import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import food from "./img/food.png";
import set from "./img/set.png";
import bike from "./img/bike.png";
import home from "./img/home.png";
import cart from "./img/cart.png";
import home2 from "./img/home2.png";

export const Challenges = () => {
  return ( 
    
    <body>
      {/* changed navbar */}
       <div>
        <Link to="/settings">
          <img
            class="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
        <div>
        <Link to="/home">
          <img
            class="column"
            src={home2}
            style={{ width: "5%", float: "left" }}
            alt="set"
          />
        </Link>
      </div>

      </div>

      <div className="text">
        <h3>
          <br />
          Let’s choose one challenge <br /> under one of the four categories!
          <br />{" "}
        </h3>

        <div>
          {" "}
          <Link to="/mychallenges">
            <button id="challbutton">
              <img
                src={food}
                style={{ marginRight: "5%", marginBottom: "-1%", width: "11%" }}
                alt="food"
              />{" "}
              Food{" "}
            </button>
          </Link>
        </div>
        <div>
          <Link to="/transportation">
            <button id="challbutton">
              <img
                src={bike}
                style={{ marginRight: "5%", marginBottom: "-1%", width: "11%" }}
                alt="bike"
              />{" "}
              Transportation{" "}
            </button>
          </Link>
        </div>
        <div>
          <button id="challbutton">
            <img
              src={home}
              style={{ marginRight: "5%", marginBottom: "-1%", width: "11%" }}
              alt="home"
            />{" "}
            Household{" "}
          </button>
        </div>
        <div>
          <button id="challbutton">
            <img
              src={cart}
              style={{ marginRight: "5%", marginBottom: "-1%", width: "11%" }}
              alt="cart"
            />{" "}
            Shopping{" "}
          </button>
        </div>
        <div>
          <button className="button2"> I will choose later </button>
        </div>
      </div>
    </body>
  );
};
