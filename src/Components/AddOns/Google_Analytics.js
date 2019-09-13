import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

// function googleTagManager(){
//     return(

//     )
// }

const $ = window.$;

function Google_Analytics() {
  const [geoInfo, setGeoInfo] = useState("");

  let params = {
    method: "GET"
  };
  let url = "https://extreme-ip-lookup.com/json/";
  // let url2 = "https://www.googletagmanager.com/gtag/js?id=UA-143779624-1";

  function checkGeo(url, params) {
    fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log("YEEET");
        // setGeoInfo(data.country);
        console.log(`IP is in ${data.country}`);
        setGeoInfo(data.country);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    checkGeo(url, params);
    setTimeout(() => {
      setTimeout(() => {
        let target = document.createElement("script");
        target.src =
          "https://www.googletagmanager.com/gtag/js?id=UA-143779624-1";
        target.setAttribute("async", "");
      }, 5000);
      if (geoInfo == "China") {
        console.log(
          `Sorry! Your current region: ${geoInfo} caused a Google script to fail. :(`
        );
      } else {
        function gtag() {
          window.dataLayer || [].push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-143779624-1");
        console.log("Analytics have ran.");
      }
    }, 4000);
  });

  return <div></div>;
}

export default Google_Analytics;
