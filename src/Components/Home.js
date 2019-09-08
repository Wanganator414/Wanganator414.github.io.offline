import React, { Component } from "react";
import Typer from "./typerAnim";
import Alert from "react-bootstrap/Alert";

function Home() {
    return (
      <div>
        {/* <br /> */}
        <Alert variant="warning">
          {/* <Alert.Heading>Howdy!</Alert.Heading> */}
          <Typer
            // heading={""}
            dataText={[
              "Welcome to my site :) Feel free to browse around.",
              "Bienvenido a mi sitio :) Fiéntase libre de mirar alrededor.",
              "欢迎来到我的网页 :) 随便看一下吧。"
            ]}
          />
          <hr />
          <h2>
            This site mainly serves as a platform for me to post about
            interesting things I come across during my studies.
          </h2>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
   
        </Alert>
      </div>
    );
}

export default Home;
