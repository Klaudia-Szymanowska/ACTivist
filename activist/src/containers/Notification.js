import React from "react";
import Popup from "reactjs-popup";

 export const Pops = () => {
  return(
    <main>
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
    </Popup>
  </main>
  );
};



