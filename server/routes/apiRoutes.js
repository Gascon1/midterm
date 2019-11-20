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
      todoItem.category = 3
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("movie" || "television")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 1
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("product")) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 4
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }
    if (lowerBody.includes("restaurant" || 'food')) {
      let todoItem = {};
      // todoItem.name = parsedBody.queryresult.assumptions.word
      todoItem.category = 2
      todoItem.user_id = 1

      myTodoItems.push(todoItem)
    }


  } else {
    let todoItem = {};

    todoItem.category = 5;
    todoItem.user_id = 1;

    myTodoItems.push(todoItem)
  }

  callback(myTodoItems);

}




module.exports = findCategory;
