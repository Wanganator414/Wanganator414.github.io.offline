import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

// function googleTagManager(){
//     return(
//         <script
//       async
//       src="https://www.googletagmanager.com/gtag/js?id=UA-143779624-1"
//     ></script>
//     <script>
//     {setTimeout(() => {}, 2000);
//       window.dataLayer = window.dataLayer || [];
//       function gtag() {
//         dataLayer.push(arguments);
//       }
//       gtag("js", new Date());
//       gtag("config", "UA-143779624-1");
//     }
//       </script>
//     )
// }

function Google_Analytics() {
  const [geoInfo, setGeoInfo] = useState("");

  let params = {
    method: "GET"
  };
  let url = "https://extreme-ip-lookup.com/json/";

  function checkGeo(url,params) {
    fetch(url,params)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log("YEEET");
        alert("YEEET");
        setGeoInfo(data.country);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    checkGeo(url, params);
  });

  return <div>{geoInfo}</div>;
}

export default Google_Analytics;
