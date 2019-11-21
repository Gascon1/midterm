const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("THIS IS THE RIGHT ONE",req.body)
    const query = {
      text: `INSERT INTO todo_items (name, category_id, user_id)
      VALUES ($1, $2, $3)`,
      values: [req.body.todoItemName, item.category, 1 ]
    };
  })

  return router
}
