import React from "react";
import "../App.css";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ChallengesCatagoriesButtons from "./components/challengesCatagoriesButtons";

export const Challenges = () => {
  return (
    <main>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>
      <div className="Page">
        <div className="text">
          <div>
            <h3>Pick a category to choose a challenge! </h3>
          </div>
          <div>
            <ChallengesCatagoriesButtons />
          </div>
        </div>
      </div>
    </main>
  );
};
