import React from "react";
import { Link } from "react-router-dom";
import "src/App.css";
import food from "../img/food.png";
import bike from "../img/bike.png";
import CheckboxContainer from "./components/checkboxcontainer";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ChallengesCatagoriesButtons from "./components/challengesCatagoriesButtons";

export const MyChallenges = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div>
          <div>
            <h3>
              <br />
              Ungoing challenges:
            </h3>
            <div className="container">
              <button
                id="challbutton"
                className="center"
                style={{ fontSize: "220%", textAlign: "left" }}
              >
                <img src={food} id="imgchall" alt="food" />
                <b
                  style={{
                    color: "#000000",
                    fontSize: "75%",
                    float: "left",
                  }}
                >
                  No beef for 7 days
                </b>
              </button>
            </div>
          </div>
          <div>
            <h3>
              <br />
              Finished challenges:
            </h3>
            <div className="container">
              <button
                id="challbutton"
                className="center"
                style={{ fontSize: "220%", textAlign: "left" }}
              >
                <img src={bike} id="imgchall" alt="bike" />
                <b
                  style={{
                    color: "#000000",
                    fontSize: "75%",
                    float: "left",
                  }}
                >
                  Car share!{" "}
                </b>
              </button>
            </div>
            <div className="container">
              <button
                id="challbutton"
                className="center"
                style={{ fontSize: "220%", textAlign: "left" }}
              >
                <img src={bike} id="imgchall" alt="bike" />
                <b
                  style={{
                    color: "#000000",
                    fontSize: "75%",
                    float: "left",
                  }}
                >
                  Public transport!{" "}
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
