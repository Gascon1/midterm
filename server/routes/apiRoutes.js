const request = require("request");
const userInput = "harry potter";
const encodedUserInput = encodeURI(userInput);
const AppId = 'YJ5XA9-EUGVJUHHHH'

const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;
// const URL = 'http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=harry%20potter&output=json'
request(URL, function(error, response, body) {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log('typeof body:', body.search('Products')); // Print the HTML for the Google homepage.
  let parsedBody = JSON.parse(body);
  console.log(parsedBody.queryresult.datatypes);
  console.log(URL)
});
