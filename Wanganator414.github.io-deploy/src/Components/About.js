import React, { Component } from "react";

import Media from "react-bootstrap/Media";
import Typer from "./typerAnim";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const iconPath = process.env.PUBLIC_URL + "/Assets/Images/bioImage.jpg";

function Stuff() {
  return (
    <div>
      {/* <br /> */}
      <Media>
        <img
          id="bioImage"
          src={iconPath}
          title="Drilling holes"
          alt="Image"
          // width="280"
          // height="507"
        />
        <Media.Body>
          <Alert class="" variant="warning">
            <h1>Hi there, my name is Eric.</h1>
            <hr />
            <h3>
              I am currently an undergraduate at UC Davis majoring in Computer
              Science and Engineering.
            </h3>
            <br/>
            <h4>I enjoy various topics and activities including:</h4>
            <ul>
              <li>Web Applications &#x1F3A8;</li>
              <li>Coding &#128187; </li>
              <li>Arduino &#x1F527; </li>
              <li>IoT &#x1F50C; </li>
              <li>Cross Country Running &#x1F3C3; </li>
              <li>Gaming &#x1F47E;</li>
              <br />
            </ul>
            <h3>You can find me on various sites using the icons up in the navbar.</h3>
          </Alert>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Stuff;
