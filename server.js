const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

const get = () => {
  db.select().from("accounts");
};

server.get("/", (req, res) => {
  db("accounts")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.get("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .first()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.post("/", (req, res) => {
  const account = req.body;
  db("accounts")
    .insert(account)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.put("/:id", (req, res) => {
  const account = req.body;
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .update(account)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = server;
