//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let counter = 0;
let countertwo = 0;
let counterthree = 0;
let counterfour = 0;
let counterfive = 0;
let countersix = 0;

setInterval(() => {
  countertwo = Math.floor(counter / 10);
  counterthree = Math.floor(counter / 100);
  counterfour = Math.floor(counter / 1000);
  counterfive = Math.floor(counter / 10000);
  countersix = Math.floor(counter / 100000);

  ReactDOM.render(
    <SecondsCounter
      counter={counter}
      countertwo={countertwo}
      counterthree={counterthree}
      counterfour={counterfour}
      counterfive={counterfive}
      countersix={countersix}
    />,
    document.querySelector("#app")
  );
  counter++;
}, 1000);
