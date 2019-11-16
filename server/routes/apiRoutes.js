const request = require('request');
const userInput = 'harry potter'
const encodedUserInput = encodeURI(userInput)


const URL = `http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=${encodedUserInput}&output=json`
// const URL = 'http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=harry%20potter&output=json'
request(URL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body.pods:', body); // Print the HTML for the Google homepage.
  // console.log('typeof body:', body.search('Products')); // Print the HTML for the Google homepage.
// let parsedBody = JSON.parse(body);
// console.log(parsedBody);
//
  // console.log(parsedBody.queryresult.datatypes);
  // console.log(body.search('Products'))
//

console.log(URL);
});
