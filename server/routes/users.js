/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into db/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/login", (req, res) => {
    // console.log('THIS IS REQ.body', req.body)
    const query = {
      text: `SELECT * FROM users
              WHERE users.email = $1
              AND users.password = $2`,
      values: [req.body.email, req.body.password]
    }

    db.query(query)
      .then(data => {
        // console.log(data.rows[0])
        res.json(data.rows[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  // updates the user infos upon submission of the update form
  // if a field is left empty, the value in the database doesnt change
  // for that specific field
  router.put("/:id", (req, res) => {

    // if (req.body.password === "" && req.body.email === "") {
    //   console.log('this isnt doing a query')

    //   db.then()

    //   db.catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });

    // } else
    if (req.body.email === "") {
      const query = {
        text: `UPDATE users SET password = $1 WHERE id = $2 RETURNING *`,
        values: [req.body.password, req.params.id]
      }
      db.query(query)
        .then(data => {
          // console.log(data.rows[0])
          res.json(data.rows[0]);
        })

    } else if (req.body.password === "") {

      const query = {
        text: `UPDATE users SET email = $1 WHERE id = $2 RETURNING *`,
        values: [req.body.email, req.params.id]
      }
      db.query(query)
        .then(data => {
          // console.log(data.rows[0])
          res.json(data.rows[0]);
        })

    } else {

      const query = {
        text: `UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *`,
        values: [req.body.email, req.body.password, req.params.id]
      }
      db.query(query)
        .then(data => {
          // console.log(data.rows[0])
          res.json(data.rows[0]);
        })
        .catch(err => {
          console.log('im in the catch of updating the email and the password')
          res
            .status(500)
            .json({ error: err.message });
        });
    }
  });


  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    const query = {
      text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      values: [req.body.name, req.body.email, req.body.password]
    }
    // console.log(req.body)
    db.query(query)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};
