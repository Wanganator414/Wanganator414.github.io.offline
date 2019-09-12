import React, { useState, useEffect } from "react";
import "../../CSS/WodContainer.css";

const rp = require("request-promise");
const cheerio = require("cheerio");

let curday = function(sp) {
  let dateDisplay = "Loading...";
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  dateDisplay = yyyy + sp + mm + sp + dd;
  return dateDisplay;
};
function WodData() {
  const [wordName, setWordName] = useState("");
  const [wordInfo, setWordInfo] = useState("");
  const [partsSpeech, setPartsSpeech] = useState("");
  let params = {
    method: "GET"
  };
  let url =
    "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" +
    curday("-") +
    "&api_key=c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e";
  function wordScrape() {
    if (wordInfo == false) {
      fetch(url, params)
        .then(response => {
          return response.json();
        })
        .then(data => {
          //work with JSON data here
          console.log(data);
          setWordName(data.word);
          setWordInfo(data.definitions[0].text);
          setPartsSpeech(data.definitions[0].partOfSpeech);
        })
        .catch(error => {
          //handle errors here
          console.log(error);
        });
    }
  }

  useEffect(() => {
    wordScrape(url, params);
  });

  return (
    <div>
      <h5>{wordName}</h5>
      <h6>{partsSpeech}</h6>
      <p>{wordInfo}</p>
    </div>
  );
}

export default WodData;
