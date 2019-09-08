//React Core
import React, { useState, useRef } from "react";

//Components
import WeatherData from "./WeatherData";
import WeatherToggle from "./WeatherToggle";

//React bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Styling
import "../../CSS/WeatherContainer.css";

//Functional component starts here
function WeatherContainer() {
  //Hooks start here
  const [tabState, setTabState] = useState("show");
  const dataClass = useRef(null);

  function handleTabChange(e) {
    e.stopPropagation();
    //Use ref on wrapper div to change its className animation
    setTabState(dataClass.current.className == "show" ? "hide" : "show");
    console.log("Weather Button Clicked");
  }
  return (
    // <div ref={containerClass} id="weatherWidget" className={tabState}>
    <div id="weatherWidget">
      <WeatherToggle
        // buttonClick is the prop passed down, you need to reference the buttonClick name for props to work
        buttonClick={handleTabChange}
        // only need to pass down event handler, no need to pass state down as well
      />

      {/*This ref is a reference to this specific html element */}
      {/* Since ref forwarding didn't work, animate data box inside big div area right here*/}
      {/* Put data in separate box for sliding animation */}
      <div ref={dataClass} id="weatherData" className={tabState}>
        <WeatherData />
      </div>
    </div>
  );
}

export default WeatherContainer;
