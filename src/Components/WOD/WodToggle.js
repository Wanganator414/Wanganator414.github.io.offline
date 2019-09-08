import React from "react";

function WodToggle({ buttonClick }) {
  return (
    <img
      id="toggle"
      margin="10px"
      title="Toggle Word"
      src="https://darksky.net/images/weather-icons/partly-cloudy-day.png"
      alt="toggleWord"
      //Using native event listener for passed down event handler
      onClick={buttonClick}
    />
  );
}

export default WodToggle;
