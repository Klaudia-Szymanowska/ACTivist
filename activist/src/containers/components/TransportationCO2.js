import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TransportationCO2 = () => {
  const initialState = () => Number(window.localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialState);

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
    <main>
      <div className="text">
        <div>
          <h3>
            Congrats! You've saved <span>{count}kg of CO2</span> today!
          </h3>
        </div>
        <div>
          <div className="center">
            <button id="challbutton1" onClick={() => addAmount(50)}>
              Car share <br /> <b>50 kg saved per day!</b>
            </button>

            <button id="challbutton1" onClick={() => addAmount(100)}>
              Public transport <br /> <b>100 kg saved per day!</b>
            </button>
            <button id="challbutton1" onClick={() => addAmount(150)}>
              Go cycling to work <br /> <b>150 kg saved per day!</b>
            </button>
            <button id="challbutton1" onClick={() => addAmount(200)}>
              Work from home <br /> <b>200 kg saved per day!</b>
            </button>
          </div>

          {/* <h3>You've saved {count}kg of CO2 so far.</h3> */}
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
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

export default TransportationCO2;
