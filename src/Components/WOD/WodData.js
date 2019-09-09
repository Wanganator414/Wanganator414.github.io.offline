import React, { useEffect } from "react";
const rp = require("request-promise");
const cheerio = require("cheerio");

let wordInfo = "";

function WodData() {
  function wordScrape() {
    if (wordInfo == false) {
      const options = {
        uri: `https://www.merriam-webster.com/word-of-the-day`,
        transform: function(body) {
          return cheerio.load(body);
        }
      };

      rp(options)
        .then($ => {
          wordInfo=$.find('.word-and-pronunciation').text();
          console.log(wordInfo);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    wordScrape();
  });

  return (
    <div>
      <p>wordInfo</p>
    </div>
  );
}

export default WodData;
