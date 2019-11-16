const request = require("request");
const userInput = "breaking bad";
const encodedUserInput = encodeURI(userInput);
const AppId = "YJ5XA9-EUGVJUHHHH";

const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;
// const URL = 'http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=harry%20potter&output=json'
request(URL, function(error, response, body) {
  let parsedBody = JSON.parse(body);
  let querySuccess = parsedBody.queryresult.success;
  let lowerBody = body.toLowerCase();

  if (querySuccess) {
    if (lowerBody.search("movie" || "television")) {
      console.log("this is a movie");


    }
    if (lowerBody.includes("book")) {
      console.log("this is a book");
    }
    if (lowerBody.includes("product")) {
      console.log("this is a product");
    }
    if (lowerBody.includes("restaurant")) {
      console.log("this is a restaurant");
    }
  }
});
