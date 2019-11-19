const request = require("request");
const userInput = "Harry Potter";
const encodedUserInput = encodeURI(userInput);
const AppId = "YJ5XA9-EUGVJUHHHH";

const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;
// const URL = 'http://api.wolframalpha.com/v2/query?appid=YJ5XA9-EUGVJUHHHH&input=harry%20potter&output=json'
request(URL, function (error, response, body) {
  let parsedBody = JSON.parse(body);
  let querySuccess = parsedBody.queryresult.success;
  let lowerBody = body.toLowerCase();
  let myTodoItems = [];
  let todoItem = {};

  if (querySuccess) {
    if (lowerBody.includes("book")) {
      todoItem.name = userInput
      todoItem.category = 'To Read'

      myTodoItems.push(todoItem)
    }
    if (lowerBody.search("movie" || "television")) {
      todoItem.name = userInput
      todoItem.category = 'To Watch'

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("product")) {
      todoItem.name = userInput
      todoItem.category = 'To Buy'

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("restaurant")) {
      todoItem.name = userInput
      todoItem.category = 'To Eat'

      myTodoItems.push(todoItem)
    }
  }

  console.log(myTodoItems);
});

