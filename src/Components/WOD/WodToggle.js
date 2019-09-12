import React from "react";
import "../../CSS/WodContainer.css";

function WodToggle({ buttonClick }) {
  return (
    <img
      id="toggle"
      margin="10px"
      title="Toggle Word"
      width="40px"
      src="http://www.icons101.com/icon_ico/id_78757/Dictionary.ico"
      alt="toggleWord"
      //Using native event listener for passed down event handler
      onClick={buttonClick}
    />
  );
}

export default WodToggle;
