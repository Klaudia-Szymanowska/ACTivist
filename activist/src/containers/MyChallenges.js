import React from "react";
import "./App.css";
import food from "../img/food.png";
import bike from "../img/bike.png";
import shopping from "../img/cart.png";
import household from "../img/home.png";
import ContainerHomeSettings from "./components/containerHomeSettings";

const foodChal = JSON.parse(localStorage.getItem("foodChallenges"));
const foodChallList = foodChal.map((chall) => <li>{chall}</li>);
const finishedFoodChal = JSON.parse(localStorage.getItem("foodChallFinished"));
const finishedFoodChallList = finishedFoodChal.map((chall) => <li>{chall}</li>);

const householdChal = JSON.parse(localStorage.getItem("householdChallenges"));
const householdChallList = householdChal.map((chall) => <li>{chall}</li>);
const finishedHouseholdChal = JSON.parse(
  localStorage.getItem("householdChallengesFinised")
);
const finishedHouseholdChallList = finishedHouseholdChal.map((chall) => (
  <li>{chall}</li>
));

const transportChal = JSON.parse(localStorage.getItem("transportChallenges"));
const transportChallList = transportChal.map((chall) => <li>{chall}</li>);
const finishedTransportChal = JSON.parse(
  localStorage.getItem("transportChallFinished")
);
const finishedTransportChallList = finishedTransportChal.map((chall) => (
  <li>{chall}</li>
));

const shoppingChal = JSON.parse(localStorage.getItem("shoppingChallenges"));
const shoppingChallList = shoppingChal.map((chall) => <li>{chall}</li>);
const finishedShoppingChal = JSON.parse(
  localStorage.getItem("shoppingChallFinished")
);
const finishedShoppingChallList = finishedShoppingChal.map((chall) => (
  <li>{chall}</li>
));

export const MyChallenges = () => {
  return (
    <main>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>
      <div className="text">
        <h3>
          <br />
          Ongoing challenges:
        </h3>
        <div className="center">
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
              <ul>{foodChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={household} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{householdChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={shopping} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{shoppingChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={bike} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{transportChallList}</ul>
            </b>
          </button>
        </div>
        <div className="container"></div>
      </div>
      <div className="text">
        <h3>
          <br />
          Finished challenges:
        </h3>
        <div className="center">
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
              <ul>{finishedFoodChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={household} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{finishedHouseholdChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={shopping} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{finishedShoppingChallList}</ul>
            </b>
          </button>
          <button
            id="challbutton"
            className="center"
            style={{ fontSize: "220%", textAlign: "left" }}
          >
            <img src={bike} id="imgchall" alt="food" />
            <b
              style={{
                color: "#000000",
                fontSize: "75%",
                float: "left",
              }}
            >
              <ul>{finishedTransportChallList}</ul>
            </b>
          </button>
        </div>
      </div>
    </main>
  );
};
