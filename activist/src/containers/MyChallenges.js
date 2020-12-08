import React from "react";
import "./App.css";
import food from "../img/food.png";
import bike from "../img/bike.png";
import shopping from "../img/cart.png";
import household from "../img/home.png";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ChallengesCatagoriesButtons from "./components/challengesCatagoriesButtons";

var foodChal = [];
var householdChal = [];
var transportChal = [];
var shoppingChal = [];
var pledgedfoodChal = localStorage.getItem("foodChallenges");
var pledgedhouseholdChal = localStorage.getItem("householdChallenges");
var pledgedtransportChal = localStorage.getItem("transportChallenges");
var pledgedshoppingChal = localStorage.getItem("shoppingChallenges");
if (pledgedfoodChal) {
  foodChal = JSON.parse(localStorage.getItem("foodChallenges"));
}
if (pledgedhouseholdChal) {
  householdChal = JSON.parse(localStorage.getItem("householdChallenges"));
}
if (pledgedtransportChal) {
  transportChal = JSON.parse(localStorage.getItem("transportChallenges"));
}
if (pledgedshoppingChal) {
  shoppingChal = JSON.parse(localStorage.getItem("shoppingChallenges"));
}

var finishedFoodChal = [];
var finishedHouseholdChal = [];
var finishedTransportChal = [];
var finishedShoppingChal = [];
var finishedPledgedfoodChal = localStorage.getItem("foodChallFinished");
var finishedPledgedhouseholdChal = localStorage.getItem(
  "householdChallengesFinised"
);
var finishedPledgedtransportChal = localStorage.getItem(
  "transportChallFinished"
);
var finishedPledgedshoppingChal = localStorage.getItem("shoppingChallFinished");
if (finishedPledgedfoodChal) {
  finishedFoodChal = JSON.parse(localStorage.getItem("foodChallFinished"));
}
if (finishedPledgedhouseholdChal) {
  finishedHouseholdChal = JSON.parse(
    localStorage.getItem("householdChallengesFinised")
  );
}
if (finishedPledgedtransportChal) {
  finishedTransportChal = JSON.parse(
    localStorage.getItem("transportChallFinished")
  );
}
if (finishedPledgedshoppingChal) {
  finishedShoppingChal = JSON.parse(
    localStorage.getItem("shoppingChallFinished")
  );
}

//const foodChal = JSON.parse(localStorage.getItem("foodChallenges"));
const foodChallList = foodChal.map((chall) => <li>{chall}</li>);
//const finishedFoodChal = JSON.parse(localStorage.getItem("foodChallFinished"));
const finishedFoodChallList = finishedFoodChal.map((chall) => <li>{chall}</li>);

//const householdChal = JSON.parse(localStorage.getItem("householdChallenges"));
const householdChallList = householdChal.map((chall) => <li>{chall}</li>);
//const finishedHouseholdChal = JSON.parse(localStorage.getItem("householdChallengesFinised"));
const finishedHouseholdChallList = finishedHouseholdChal.map((chall) => (
  <li>{chall}</li>
));

//const transportChal = JSON.parse(localStorage.getItem("transportChallenges"));
const transportChallList = transportChal.map((chall) => <li>{chall}</li>);
//const finishedTransportChal = JSON.parse(localStorage.getItem("transportChallFinished"));
const finishedTransportChallList = finishedTransportChal.map((chall) => (
  <li>{chall}</li>
));

//const shoppingChal = JSON.parse(localStorage.getItem("shoppingChallenges"));
const shoppingChallList = shoppingChal.map((chall) => <li>{chall}</li>);
//const finishedShoppingChal = JSON.parse(localStorage.getItem("shoppingChallFinished"));
const finishedShoppingChallList = finishedShoppingChal.map((chall) => (
  <li>{chall}</li>
));

export const MyChallenges = () => {
  return (
    <main>
      <ContainerHomeSettings />
      <div className="text">
        <h3>
          <br />
          Pledged challenges:
        </h3>
        <div className="container">
          <div className="content2">
            <div className="center">
              <div id="challbutton2">
                <div className="textchall">
                  <img src={food} id="imgchall" alt="food" />
                  <b>
                    <ul>{foodChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img src={household} id="imgchall" alt="food" />
                  <b>
                    <ul>{householdChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img src={shopping} id="imgchall" alt="food" />
                  <b>
                    <ul>{shoppingChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img src={bike} id="imgchall" alt="food" />
                  <b>
                    <ul>{transportChallList}</ul>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <h3>
          <br />
          Finished challenges:
        </h3>
        <div className="container">
          <div className="content2">
            <div className="center">
              <div id="challbutton2">
                <div className="textchall">
                  <img src={food} id="imgchall" alt="food" />
                  <b>
                    <ul>{finishedFoodChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={household}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{finishedHouseholdChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img src={shopping} id="imgchall" alt="food" />
                  <b>
                    <ul>{finishedShoppingChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img src={bike} id="imgchall" alt="food" />
                  <b>
                    <ul>{finishedTransportChallList}</ul>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
