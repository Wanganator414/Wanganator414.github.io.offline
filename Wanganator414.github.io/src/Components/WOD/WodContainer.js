//React Core
import React, { useState, useRef } from "react";

//Components
import WodToggle from "./WodToggle";
import WodData from "./WodData";
//React bootstrap

//Styling
import "../../CSS/WodContainer.css";

// Functional component starts here
function WodContainer() {
  //Hooks start here
  const wordDataWrapper = useRef(null);
  const { tabState, setTabState } = useState("show");
  //Button click handler
  function handleTabChange(e) {
    e.stopPropagation();
    //Use ref on wrapper div to change its className animation
    setTabState(wordDataWrapper.current.className == "show" ? "hide" : "show");
    console.log("WOD Button Clicked");
  }

  return (
    <div id="outerWrapper">
      <WodToggle buttonClick={handleTabChange} />
      <div ref={wordDataWrapper} id="wordData" className={tabState}>
        <WodData />
      </div>
    </div>
  );
}

export default WodContainer;
