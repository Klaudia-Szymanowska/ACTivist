import React from "react";
import "../App.css";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ChallengesCatagoriesButtons from "./components/challengesCatagoriesButtons";

export const Challenges = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <div>
            <h3>
              <br />
              Let’s choose one challenge <br /> under one of the four
              categories!
              <br />{" "}
            </h3>
          </div>
          <div>
            <ChallengesCatagoriesButtons />
          </div>
        </div>
      </div>
    </main>
  );
};
