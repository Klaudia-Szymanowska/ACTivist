import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShoppingCO2 = () => {
  let userChall = [];
  let userChallFinish = [];
  let shoppingChallFinished = localStorage.getItem("shoppingChallFinished");
  let pledgedChallenges = localStorage.getItem("shoppingChallenges");
  if (pledgedChallenges) {
    userChall = JSON.parse(localStorage.getItem("shoppingChallenges"));
  }
  if (shoppingChallFinished) {
    userChallFinish = JSON.parse(localStorage.getItem("shoppingChallFinished"));
  }

  const initialState = () =>
    Number(window.localStorage.getItem("shoppingCount")) || 0;
  const [shoppingCount, setShoppingCount] = useState(initialState);
  const [shoppingChallenges, setShoppingChallenges] = useState(userChall);
  const [shoppingFinished, setshoppingFinished] = useState(userChallFinish);

  useEffect(() => {
    localStorage.setItem(
      "shoppingChallenges",
      JSON.stringify(shoppingChallenges)
    );
  });

  useEffect(() => {
    window.localStorage.setItem("shoppingCount", shoppingCount);
  }, [shoppingCount]);

  useEffect(() => {
    localStorage.setItem(
      "shoppingChallFinished",
      JSON.stringify(shoppingFinished)
    );
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userChall before checking the condition
    userChall = JSON.parse(localStorage.getItem("shoppingChallenges"));
    if (!userChall.includes(newChallenge)) {
      setShoppingChallenges([...shoppingChallenges, newChallenge]);
      setShoppingCount(shoppingCount + newAmount);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to unpledge?";
    if (window.confirm(msg)) {
      setshoppingFinished(Object.assign([], userChall));
      setShoppingCount(0);
      setShoppingChallenges([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <h3>
            Congrats! You've saved{" "}
            <span>{shoppingCount.toFixed(1)}kg of CO2</span> today!
          </h3>
        </div>
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy eco products", 0.3)}
            >
              Buy eco products <br /> <b>0.3 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => addChallenge("Go package free", 0.4)}
            >
              Go package free <br /> <b>0.4 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("No plastic bags", 0.1)}
            >
              No plastic bags <br /> <b>0.1 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy from local supplier", 0.2)}
            >
              Buy from local supplier <br /> <b>0.2 kg saved per day!</b>
            </button>
          </div>
          <button id="challbutton3" onClick={resetAmount}>
            Unpledge shopping challenge
          </button>
          <div>
            <Link to="/home">
              <button id="challbutton4">Pledge</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCO2;
