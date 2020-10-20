import React from 'react';
//import './App.css';
import food from "./img/food.png";
import set from "./img/set.png";
import bike from "./img/bike.png";
import home from "./img/home.png";
import cart from "./img/cart.png";

export const Challenges = () => {
  return (
    <body>
{/* 1 page*/ }

<div>
        <img className="column" src={set} style={{width: "10%"}} alt = "set"/>
    </div>

    <div>
        <img className="column" src={set} style={{width: "10%", float: "right"}} alt = "set" />
    </div>


    <div className="text">
    <h3><br/>Let’s choose one challenge <br/> under one of the four categories!<br/> </h3>
   
    <div><button><img src={food} style={{marginRight: "5%", marginBottom: "-1%", width: "11%"}} alt = "food" /> Food </button></div>
    <div><button><img src={bike} style={{marginRight: "5%", marginBottom: "-1%", width: "11%"}} alt = "bike"/> Transportation </button></div>
    <div><button><img src={home} style= {{marginRight: "5%", marginBottom: "-1%", width: "11%"}} alt = "home"/> Household </button></div>
    <div><button><img src={cart}style= {{marginRight: "5%", marginBottom: "-1%", width: "11%"}} alt = "cart"/> Shopping </button></div>
    <div><button className="button2"> I will choose later </button></div>
    </div>  



    </body>
  );
}