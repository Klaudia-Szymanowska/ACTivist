import "./App.css";
import React, { useState, useEffect } from "react";

const CheckboxTest1 = () => {
  var pledgedChallenges = [];
  const initialState = () => Number(window.localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialState);

  const [challenges, setChallenges] = useState(pledgedChallenges);

  useEffect(() => {
    localStorage.setItem(foodChallenges, JSON.stringify(challenges));
  });

  const addChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  const addAmount = (amount) => {
    setCount(count + amount);
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setCount(0);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="app">
      <div className="button-container">
        <button
          id="radio_button"
          className="button button--primary"
          value="No Beef"
          onClick={() => {
            addAmount(50);
            addChallenge("No beef");
          }}
        >
          No beef
        </button>

        <button
          id="radio_button"
          className="button button--primary"
          value="Go pescetarian"
          onClick={() => addAmount(100)}
        >
          Go pescetarian{" "}
        </button>
        <button
          id="radio_button"
          className="button button--primary"
          value="Go vegetarian"
          onClick={() => addAmount(150)}
        >
          Go vegetarian{" "}
        </button>
        <button
          id="radio_button"
          className="button button--primary"
          value="Go vegan"
          onClick={() => addAmount(200)}
        >
          Go vegan{" "}
        </button>
      </div>
      <div className="message-container">
        <p className="message">
          Congrats! You've saved{" "}
          <span className="message-amount">{count}kg of CO2</span> today!
        </p>
      </div>
      <p className="total-count">You've saved {count}kg of CO2 so far.</p>
      <div className="reset-container">
        <button className="button reset-button" onClick={resetAmount}>
          Reset Amount
        </button>
      </div>
    </div>
  );
};

export default CheckboxTest1;
