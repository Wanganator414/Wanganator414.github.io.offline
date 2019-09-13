//React Core
import React, { Component, useState, useEffect, useRef } from "react";

//Routing
import {
  Switch,
  Link,
  Redirect,
  BrowserRouter,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//  HashRouter has # in url while BrowserRouter does NOT have it, but HR has older browser compatibility

//Pages
import Home from "./Home";
import Stuff from "./About";
import CV from "./CV";

//React-bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

//Components
import WeatherContainer from "./Weather/WeatherContainer";
import WodContainer from "./WOD/WodContainer";

//AddOns
import Google_Analytics from "./AddOns/Google_Analytics";

//Global path for an image used only here
const iconPath =
  process.env.PUBLIC_URL + "/Assets/Images/android-chrome-512x512.png";
const emailPath = process.env.PUBLIC_URL + "/Assets/Images/email.ico";
const githubPath = process.env.PUBLIC_URL + "/Assets/Images/GitHub32px.png";
const linkedInPath = process.env.PUBLIC_URL + "/Assets/Images/linkedIn.png";
const kagglePath = process.env.PUBLIC_URL + "/Assets/Images/Kaggle-512.png";

export default function Main() {
  return (
    <Container>
      <Google_Analytics />
      <WeatherContainer />
      <WodContainer />

      {/* Routing area starts here */}
      {/* <BrowserRouter> */}

      {/* Navbar begins here...quite long though :/  */}
      <Navbar bg="warning" variant="dark" expand="sm">
        <Row>
          <Col sm>
            <Navbar.Brand>
              <NavLink exact to="/">
                <img
                  id="mainLogo"
                  src={iconPath}
                  height="35"
                  className="d-inline-block align-top"
                  alt="Main Logo"
                  title="Go to Home"
                />
              </NavLink>
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Col sm>
                <Nav.Link>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </Nav.Link>
              </Col>
              <Col sm>
                <Nav.Link>
                  <NavLink to="/about">About</NavLink>
                </Nav.Link>
              </Col>
              <Col sm>
                <Nav.Link>
                  <NavLink to="/cv">CV</NavLink>
                </Nav.Link>
              </Col>
              <Col sm>
                <Nav.Link>
                  <NavLink to="/posts">Posts</NavLink>
                </Nav.Link>
              </Col>
              <Col sm>
                <Navbar.Brand>
                  <a href="mailto:ewang414@gmail.com" target="_blank">
                    <img
                      id="mainLogo"
                      src={emailPath}
                      height="25"
                      className="d-inline-block align-center"
                      alt="Email"
                      title="Email"
                    />
                  </a>
                </Navbar.Brand>
              </Col>
              <Col sm>
                <Navbar.Brand>
                  <a href="https://github.com/Wanganator414" target="_blank">
                    <img
                      id="mainLogo"
                      src={githubPath}
                      height="25"
                      className="d-inline-block align-center"
                      alt="Github"
                      title="Github"
                    />
                  </a>
                </Navbar.Brand>
              </Col>
              <Col sm>
                <Navbar.Brand>
                  <a href="https://www.kaggle.com/wanganator" target="_blank">
                    <img
                      id="mainLogo"
                      src={kagglePath}
                      height="25"
                      className="d-inline-block align-center"
                      alt="Kaggle"
                      title="Kaggle"
                    />
                  </a>
                </Navbar.Brand>
              </Col>
              <Col sm>
                <Navbar.Brand>
                  <a
                    href="https://www.linkedin.com/in/eric-wang-341289157/"
                    target="_blank"
                  >
                    <img
                      id="mainLogo"
                      src={linkedInPath}
                      height="25"
                      className="d-inline-block align-center"
                      alt="LinkedIn"
                      title="LinkedIn"
                    />
                  </a>
                </Navbar.Brand>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Navbar>

      {/* Routed content begins here */}
      <Container bg="dark">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Stuff} />
          <Route path="/cv" component={CV} />
          {/* "404 Page" here */}
          <Route
            render={() => (
              <div>
                <Alert variant="warning">
                  <h1>Opps! The page you're trying to reach isn't there! 😢</h1>
                  <hr />

                  <h2 style={{ textAlign: "center" }}>
                    <Link to="/">Head Home ➡ 🌎</Link>
                  </h2>
                </Alert>
              </div>
            )}
          />
        </Switch>
      </Container>

      {/* </BrowserRouter> */}
      {/* Routing area ends here */}
    </Container>
  );
}

// export default Main;
