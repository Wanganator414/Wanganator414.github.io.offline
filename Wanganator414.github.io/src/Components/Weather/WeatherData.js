import React from "react";
import { useState, useEffect } from "react";

//Get current day formatted
let curday = function(sp) {
  let dateDisplay = "Loading...";
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  dateDisplay = mm + sp + dd + sp + yyyy;
  return dateDisplay;
};

let imgTitle = "";



//Functional component for img and data
const WeatherData = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("Loading...");
  let url =
    "https://community-open-weather-map.p.rapidapi.com/weather?lat=38.54&lon=-121.74&id=2172797&units=%22metric%22+or+%22imperial%22&mode=json&q=Davis%2CUSA";

  //informational obj to pass into fetch
  let params = {
    headers: {
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      "X-RapidAPI-Key": "0695836580msh59f7aa3e827ccd1p151d4ejsn50792a0af711"
    },
    method: "GET"
  };

  function apiCall(url, params) {
    //Only run when website runs for first time, avoid redundant API calls
    if (imgUrl == false) {
      fetch(url, params)
        .then(response => {
          //return readable stream here
          return response.json();
        })
        .then(data => {
          //work with JSON data here
          console.log("Data arrived");
          imgTitle = data.weather[0].main;
          setWeatherInfo(
            `${data.weather[0].main} and ${(data.main.temp - 273.15).toFixed(
              1
            )}°C`
          );
          setImgUrl(
            "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
          );
          console.log(data);
        })
        .catch(error => {
          //handle errors here
          console.log(error);
        });
    }
  }
  //Is auto called on mount and updates
  useEffect(() => {
    apiCall(url, params);
    //   setInterval(() => {
    //       apiCall(url, params);
    //       console.log("Request sent");
    //     }, 1200000);  //20min intervals
    //     console.log("HMMMMM....")
  });
  return (
    <div>
      <p>Davis,CA</p>
      <p>{curday("-")}</p>
      <img id="weatherIcon" src={imgUrl} title={imgTitle}></img>
      {/* <br /> */}
      <p>{weatherInfo}</p>
    </div>
  );
};

export default WeatherData;
