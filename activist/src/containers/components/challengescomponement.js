import "./App.css";
import React, { useState, useEffect } from "react";
import { newChallgeneItem } from "./newChallengesItem";

const ChallenggesComponent = (props) => {
  const OPTIONS = [];

  createChallenge = (option) => (
    <newChallgeneItem label={option.name} label2={option.CO2} />
  );

  createChallenges = () => OPTIONS.map(this.createChallenge);

  return (
    <main>
      <div className="text">
        <div>
          <div className="center">
            <form onSubmit={this.handleFormSubmit}>
              {this.createChallenges()}
              <div className="form-group mt-2">
                <button type="submit" className="button2" id="pledge">
                  Pledge
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{foodCount}kg of CO2</span> today!
            </h3>
          </div>
          <h3>You've saved {foodCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChallenggesComponent;
