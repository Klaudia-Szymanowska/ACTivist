import React from "react";

const NewChallengeItem = ({ label, value }) => (
  <button
    id="challbutton1"
    onClick={() => {
      addChallenge(label, value);
    }}
  >
    {label} <br /> <b>{value} kg saved per day!</b>
  </button>
);

export default NewChallengeItem;
