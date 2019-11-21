/*
 * All routes for todo_items are defined here
 * Since this file is loaded in server.js into db/todo_items,
 *   these routes are mounted onto /todo_items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const request = require("request");
const express = require('express');
const findCategory = require('../helpers/findCategory')
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT todo_items.id, todo_items.name, categories.name as category, todo_items.user_id
    FROM todo_items
    JOIN categories ON categories.id = category_id`)
      .then(data => {
        const todo_items = data.rows;
        res.json({ todo_items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:todo_item/categories", (req, res) => {
    const query = {
      text: `SELECT DISTINCT categories.name FROM todo_items
JOIN categories ON categories.id = category_id WHERE todo_items.name LIKE $1`,
      values: [decodeURI(req.params["todo_item"])]
    };
          db.query(query)
          .then(data => {
            res.json(data.rows)
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
   })

  router.post("/", (req, res) => {
    let userTodoItem = req.body.text

    if (userTodoItem.search('eat') >= 0) {
      const query = {
        text: `INSERT INTO todo_items (name, category_id, user_id)
          VALUES ($1, $2, $3)`,
        values: [req.body.text, 2, 1]
      };

      db.query(query)
        .then(data => {
          // console.log(data.rows)
          // console.log(data)
          const todo_items = data.rows;
          res.json({ todo_items });
        })
        .catch(err => {
          console.log('we are in teh catch')
          res
            .status(500)
            .json({ error: err.message });
        });
    }
    if (userTodoItem.search('read') >= 0) {
      const query = {
        text: `INSERT INTO todo_items (name, category_id, user_id)
          VALUES ($1, $2, $3)`,
        values: [req.body.text, 3, 1]
      };

      db.query(query)
        .then(data => {
          // console.log(data.rows)
          // console.log(data)
          const todo_items = data.rows;
          res.json({ todo_items });
        })
        .catch(err => {
          console.log('we are in teh catch')
          res
            .status(500)
            .json({ error: err.message });
        });
    }

    if (userTodoItem.search('watch') >= 0) {
      const query = {
        text: `INSERT INTO todo_items (name, category_id, user_id)
          VALUES ($1, $2, $3)`,
        values: [req.body.text, 1, 1]
      };

      db.query(query)
        .then(data => {
          // console.log(data.rows)
          // console.log(data)
          const todo_items = data.rows;
          res.json({ todo_items });
        })
        .catch(err => {
          console.log('we are in teh catch')
          res
            .status(500)
            .json({ error: err.message });
        });
    }

    if (userTodoItem.search('buy') >= 0) {
      const query = {
        text: `INSERT INTO todo_items (name, category_id, user_id)
          VALUES ($1, $2, $3)`,
        values: [req.body.text, 4, 1]
      };

      db.query(query)
        .then(data => {
          // console.log(data.rows)
          // console.log(data)
          const todo_items = data.rows;
          res.json({ todo_items });
        })
        .catch(err => {
          console.log('we are in teh catch')
          res
            .status(500)
            .json({ error: err.message });
        });
    }

    else {

      const encodedUserInput = encodeURI(req.body.text);
      const AppId = "YJ5XA9-EUGVJUHHHH";
      const URL = `http://api.wolframalpha.com/v2/query?input=${encodedUserInput}&output=json&appid=${AppId}`;


      request(URL, (a, b, c) => findCategory(a, b, c, function (myTodoItems) {

        for (const item of myTodoItems) {

          const query = {
            text: `INSERT INTO todo_items (name, category_id, user_id)
          VALUES ($1, $2, $3)`,
            values: [req.body.text, item.category, item.user_id]
          };

          db.query(query)
            .then(data => {
              // console.log(data.rows)
              // console.log(data)
              const todo_items = data.rows;
              res.json({ todo_items });
            })
            .catch(err => {
              res
                .status(500)
                .json({ error: err.message });
            });
        }
      }))
    }
    // console.log(request(URL, findCategory))

  });

  return router;
};




