import React from "react";
import "../App.css";
import ContainerHomeSettings from "./components/containerHomeSettings";
import ChallengesCatagoriesButtons from "./components/challengesCatagoriesButtons";

export const Challenges = () => {
  return (
    <main>
      <div className="Page">
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

{
  /*to be changed by Louise as a component */
}
/*
<div>
<Link to="/settings">
  <img
    className="column"
    src={set}
    style={{ width: "5%", float: "right" }}
    alt="set"
  />
</Link>
<div>
<Link to="/home">
  <img
    className="column"
    src={home2}
    style={{ width: "5%", float: "left" }}
    alt="set"
  />
</Link>
</div>

</div>

<div className="text">
<h3>
  <br />
  Let’s choose one challenge <br /> under one of the four categories!
  <br />{" "}
</h3>

<div>
  {" "}
  <Link to="/mychallenges">
    <button id="challbutton">
      <img
        src={food}
        id="imgchall"
        alt="food"
      />{" "}
      Food{" "}
    </button>
  </Link>
</div>
<div>
  <Link to="/transportation">
    <button id="challbutton">
      <img
        src={bike}
        id="imgchall"
        alt="bike"
      />{" "}
      Transportation{" "}
    </button>
  </Link>
</div>
<div>
  <button id="challbutton">
    <img
      src={home}
      id="imgchall"
      alt="home"
    />{" "}
    Household{" "}
  </button>
</div>
<div>
  <button id="challbutton">
    <img
      src={cart}
      id="imgchall"
      alt="cart"
    />{" "}
    Shopping{" "}
  </button>
</div>
<div>
  <button className="button2"> I will choose later </button>
</div>
</div>
*/
