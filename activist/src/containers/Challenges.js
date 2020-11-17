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
            <h3>
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
