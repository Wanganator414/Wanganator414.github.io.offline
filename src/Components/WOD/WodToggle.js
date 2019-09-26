import React from "react";
import "../../CSS/WodContainer.css";

const wordPath =
  process.env.PUBLIC_URL + "/Assets/Images/WOD.ico";

function WodToggle({ buttonClick }) {
  return (
    <img
      id="toggle"
      margin="10px"
      title="Toggle Word"
      width="40px"
      src={wordPath}
      alt="toggleWord"
      //Using native event listener for passed down event handler
      onClick={buttonClick}
    />
  );
}

export default WodToggle;
