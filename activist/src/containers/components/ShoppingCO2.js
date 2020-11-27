import "./App.css";
import React, { useState, useEffect } from "react";

const ShoppingCO2 = () => {
  var userShoppingChall = [];
  var userShoppingSaved = [];
  var pledgedChallenges = localStorage.getItem("shoppingChallenges");
  if (pledgedChallenges) {
    userShoppingChall = JSON.parse(localStorage.getItem("shoppingChallenges"));
  }
  var savedShoppingCarbon = Number(
    window.localStorage.getItem("shoppingSavedCarbon")
  );
  if (savedShoppingCarbon) {
    userShoppingSaved = JSON.parse(localStorage.getItem("shoppingSavedCarbon"));
  }

  const initialState = () =>
    Number(window.localStorage.getItem("shoppingCount")) || 0;
  const [shoppingCount, setShoppingCount] = useState(initialState);
  const [shoppingChallenges, setShoppingChallenges] = useState(
    userShoppingChall
  );
  const [carbonSavings, setCarbonSavings] = useState(userShoppingSaved);

  useEffect(() => {
    localStorage.setItem(
      "shoppingChallenges",
      JSON.stringify(shoppingChallenges)
    );
  });

  useEffect(() => {
    localStorage.setItem("shoppingSavedCarbon", JSON.stringify(carbonSavings));
  });

  useEffect(() => {
    window.localStorage.setItem("shoppingCount", shoppingCount);
  }, [shoppingCount]);

  const addChallenge = (newChallenge, newAmount) => {
    // here update userShoppingChall before checking the condition
    if (!userShoppingChall.includes(newChallenge)) {
      setShoppingChallenges([...shoppingChallenges, newChallenge]);
      setShoppingCount(shoppingCount + newAmount);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setShoppingCount(0);
      setShoppingChallenges([]);
      setCarbonSavings([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy eco products", 50)}
            >
              Buy eco products <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => addChallenge("Go package free", 100)}
            >
              Go package free <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("No plastic bags", 150)}
            >
              No plastic bags <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy from local supplier", 200)}
            >
              Buy from local supplier <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{shoppingCount}kg of CO2</span>{" "}
              today!
            </h3>
          </div>
          <h3>You've saved {shoppingCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCO2;
