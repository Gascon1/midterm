const express = require('express');
const router = express.Router();






module.exports = (db) => {
  // : email: password
  router.post("/", (req, res) => {
    console.log('THIS IS REQ.PARAMS', req.params)
    const query = {
      text: `SELECT * FROM users
              WHERE users.email = $1
              AND users.password = $2`,
      values: [req.params.email, req.params.password]
    }

    db.query(query)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};
