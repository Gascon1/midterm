const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("THIS IS THE RIGHT ONE",req.body)
    console.log("todoItem:",req.body.todoItemName )
    console.log("category:",req.body.category )

    const query = {
      text: `INSERT INTO todo_items (name, category_id, user_id)
      VALUES ($1, $2, $3)`,
      values: [req.body.todoItemName, req.body.category, 1 ]
    };

    db.query(query)
    .then(data => {
      const todo_items = data.rows;
      res.json({ todo_items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  router.delete("/", (req, res) => {
    console.log("THIS IS THE RIGHT ONE",req.body)
    console.log("todoItem:",req.body.todoItemName )
    console.log("category:", Number(req.body.category) )

    const query = {
      text: `DELETE FROM todo_items
      WHERE name = $1 AND category_id = $2 AND user_id = $3`,
      // WHERE name='twilight' AND category_id = 3 AND user_id=1;

      values: [req.body.todoItemName, Number(req.body.category), 1 ]
    };

    db.query(query)
    .then(data => {
      const todo_items = data.rows;
      res.json({ todo_items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  return router
}
