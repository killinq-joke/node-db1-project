const express = require("express");

const helpers = require("./data/helpers")

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    helpers.get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.get("/:id", (req, res) => {
  const { id } = req.params;
    helpers.getByID(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.post("/", (req, res) => {
  const account = req.body;
    helpers.insert(account)
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
    helpers.update(id, account)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.delete("/:id", (req, res) => {
    const {id} = req.params
    helpers.remove(id)
    .then(response => {
        res.status(200).json("deleted")
    })
    .catch(err => {
        res.status(500).end()
    })
})



module.exports = server;
