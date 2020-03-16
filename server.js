const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

const get = () => {
  return db.select().from("accounts");
};

const getByID = (id) => {
    return db('accounts').where({id}).first()
}

const insert = (account) => {
    return db('accounts').insert(account)
}

const update = (id, account) => {
    return db("accounts").where({id}).update(account)
}

const remove = (id) => {
    return db("accounts").delete().where({id})
}

server.get("/", (req, res) => {
    get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.get("/:id", (req, res) => {
  const { id } = req.params;
  getByID(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.post("/", (req, res) => {
  const account = req.body;
    insert(account)
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
    update(id, account)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).end();
    });
});

server.delete("/:id", (req, res) => {
    const {id} = req.params
    remove(id)
    .then(response => {
        res.status(200).json("deleted")
    })
    .catch(err => {
        res.status(500).end()
    })
})



module.exports = server;
