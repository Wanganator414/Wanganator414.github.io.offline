import React, { useRef } from "react";
import "../../CSS/WeatherToggle.css";


//Pass props in param area
function WeatherToggle({ buttonClick }) {
  // const toggleButton = useRef(null);
  return (
    <img
      // ref={toggleButton}
      id="toggle"
      margin="10px"
      title="Toggle Weather"
      src="https://darksky.net/images/weather-icons/partly-cloudy-day.png"
      alt="toggleWeather"
      
      //Using native event listener for passed down event handler
      onClick={buttonClick}
    ></img>
  );
}

export default WeatherToggle;
