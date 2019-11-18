/*
 * All routes for todo_items are defined here
 * Since this file is loaded in server.js into api/todo_items,
 *   these routes are mounted onto /todo_items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT todo_items.id, todo_items.name, categories.name as category, todo_items.user_id
    FROM todo_items
    JOIN categories ON categories.id = category_id`)
      .then(data => {
        console.log(data.rows)
        console.log(data)
        const todo_items = data.rows;
        res.json({ todo_items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
