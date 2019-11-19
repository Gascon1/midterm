const request = require("request");



const findCategory = function (error, response, body, callback) {
  let parsedBody = JSON.parse(body);
  let querySuccess = parsedBody.queryresult.success;
  let lowerBody = body.toLowerCase();
  let myTodoItems = [];

  if (querySuccess) {
    if (lowerBody.includes("book")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 'To Read'
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("movie" || "television")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 'To Watch'
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("product")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 'To Buy'
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("restaurant")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 'To Eat'
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
  }
  // console.log('THIS IS THE BODY', body)
  // console.log(myTodoItems)
  // console.log(body['queryresult'])
  callback(myTodoItems);

}
// const encodedUserInput = encodeURI(userInput);
// const encodedUserInput = encodeURI("harry potter");
// const AppId = "YJ5XA9-EUGVJUHHHH";
// const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;


// request(URL, findCategory)

module.exports = findCategory;
