const request = require("request");
const userInput = "harry potter";
const encodedUserInput = encodeURI(userInput);
const AppId = "YJ5XA9-EUGVJUHHHH";

const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;
// const URL = 'http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=harry%20potter&output=json'
request(URL, function(error, response, body) {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log('typeof body:', body.search('Products')); // Print the HTML for the Google homepage.
  let parsedBody = JSON.parse(body);
  let querySuccess = parsedBody.queryresult.success;
  let lowerBody = body.toLowerCase();
  // checking if the query succeeds
  // if (parsedBody.queryresult.success) {
  //   console.log('datatype : ', datatype);
  //   console.log('tyopeof datatype : ', typeof datatype)
  //   console.log(datatype.search("Fictional"))
  //   // console.log('body ; ', body)
  //   if (datatype.search("Fictional") !== - 1) {
  //     console.log('This is a fictional character')
  //   }

  // }
console.log(body);
  if (querySuccess) {
    if (lowerBody.includes("movie")) {
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
