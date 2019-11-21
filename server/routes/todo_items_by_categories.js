
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
        db.query(`SELECT todo_items.id, todo_items.name, categories.name as category,
        todo_items.user_id, todo_items.is_completed
    FROM todo_items
    JOIN categories ON categories.id = category_id
    GROUP BY categories.id, todo_items.id
    ORDER BY todo_items.id`)
          .then(data => {

            const todo_items = data.rows;
            const myCategories = {}
            for (const todo_item of todo_items){
             if (Object.keys(myCategories).indexOf(todo_item.category) < 0 ) {
               myCategories[todo_item.category] = []
               myCategories[todo_item.category].push(todo_item)
             } else {
              myCategories[todo_item.category].push(todo_item)
             }
            }
            res.json(myCategories);
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
      });
  // })
  return router;
};
