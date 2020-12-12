import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import food from "../img/food.png";
import bike from "../img/bike.png";
import shopping from "../img/cart.png";
import household from "../img/home.png";
import Popup from "./components/Popup";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const MyChallenges = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  let foodChal = [];
  let householdChal = [];
  let transportChal = [];
  let shoppingChal = [];
  let pledgedfoodChal = localStorage.getItem("foodChallenges");
  let pledgedhouseholdChal = localStorage.getItem("householdChallenges");
  let pledgedtransportChal = localStorage.getItem("transportChallenges");
  let pledgedshoppingChal = localStorage.getItem("shoppingChallenges");
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

  let finishedFoodChal = [];
  let finishedHouseholdChal = [];
  let finishedTransportChal = [];
  let finishedShoppingChal = [];
  let finishedPledgedfoodChal = localStorage.getItem("foodChallFinished");
  let finishedPledgedhouseholdChal = localStorage.getItem(
    "householdChallengesFinised"
  );
  let finishedPledgedtransportChal = localStorage.getItem(
    "transportChallFinished"
  );
  let finishedPledgedshoppingChal = localStorage.getItem(
    "shoppingChallFinished"
  );
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
  const foodChallList = foodChal.map((chall) => <li>{chall}</li>);
  const finishedFoodChallList = finishedFoodChal.map((chall) => (
    <li>{chall}</li>
  ));

  const householdChallList = householdChal.map((chall) => <li>{chall}</li>);
  const finishedHouseholdChallList = finishedHouseholdChal.map((chall) => (
    <li>{chall}</li>
  ));

  const transportChallList = transportChal.map((chall) => <li>{chall}</li>);
  const finishedTransportChallList = finishedTransportChal.map((chall) => (
    <li>{chall}</li>
  ));

  const shoppingChallList = shoppingChal.map((chall) => <li>{chall}</li>);
  const finishedShoppingChallList = finishedShoppingChal.map((chall) => (
    <li>{chall}</li>
  ));

  function handleReset(event) {
    localStorage.clear();
  }

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
            <div className="left">
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={food}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{foodChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={bike}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{transportChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={household}
                    id="imgchall"
                    alt="food"
                    style={{ height: "47px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{householdChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={shopping}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{shoppingChallList}</ul>
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
            <div className="left">
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={food}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{finishedFoodChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={bike}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{finishedTransportChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={household}
                    id="imgchall"
                    alt="food"
                    style={{ height: "47px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{finishedHouseholdChallList}</ul>
                  </b>
                </div>
              </div>
              <div id="challbutton2">
                <div className="textchall">
                  <img
                    src={shopping}
                    id="imgchall"
                    alt="food"
                    style={{ height: "50px", marginTop: "10px" }}
                  />
                  <b>
                    <ul>{finishedShoppingChallList}</ul>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button2" onClick={togglePopup}>
          Reset challenges
        </button>
        {isOpen && (
          <Popup
            content={
              <>
                <p>
                  Are you sure you want to reset all finished and pledged
                  challenges?
                </p>
                <Link to="/">
                  <button id="popup_button" onClick={handleReset}>
                    Yes, I am sure
                  </button>
                </Link>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </main>
  );
};
