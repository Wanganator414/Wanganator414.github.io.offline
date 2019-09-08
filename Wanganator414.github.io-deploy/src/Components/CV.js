import React from "react";
import Container from "react-bootstrap/Container";
import "../CSS/My_CV.css";
const iconPath = process.env.PUBLIC_URL + "/Assets/css/My_CV.css";

function CV() {
  return (
    <Container>
      <br />
      <div
        id="main"
        style={{
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        }}
      >
        <h1 id="title">Eric Yu Yang Wang</h1>
        <div class="basic-info section">
          <h2 class="title">Contact</h2>
          <div class="set">
            <p class="address">
              <span class="value">
                352 DAIRY ROAD
                <br />
                320A Kearney Hall
                <br />
                DAVIS, CA 95616
              </span>
            </p>
            <div class="r">
              <p class="email">
                <label>
                  E-mail<span class="colon">:</span>
                </label>
                <span class="value">ewang414 at gmail dot com</span>
              </p>

              <p class="website">
                <label>
                  Website<span class="colon">:</span>
                </label>
                <span class="value">
                  <a href="https://wanganator414.github.io" rel="nofollow" target="_blank">
                    https://wanganator414.github.io
                  </a>
                </span>
              </p>

              <p class="phone">
                <label>
                  Phone<span class="colon">:</span>
                </label>
                <span class="value">(908)-246-7318</span>
              </p>
            </div>
            <div class="clear" />
          </div>
          {/* set // */}
          <div class="clear" />
        </div>
        {/* basic-info // */}

        <div class="section section-interests">
          <h2 class="title">Interests</h2>
          <div class="set">
            <div class="item">
              <span class="info">
                NodeJS, JS, Java, Python, Machine Learning, Arduino, IoT
              </span>
            </div>
          </div>
          <div class="clear" />
        </div>

        {/* Experience */}
        <div class="section section-interests">
          <h2 class="title">Experience</h2>
          <div class="set">
            <div class="item">
              <ul>
                <li>Familiar with Android development (3 multi-view apps)</li>
                <li>Familiar with MERN stack in web development</li>
                <li>Familiar with Matplotlib, Seaborn, Pandas, and Scikit-learn libraries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CV;
