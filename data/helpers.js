const db = require("./dbConfig")

const get = () => {
  return db.select().from("accounts");
};

const getByID = (id) => {
    return db('accounts').where({id}).first()
}

const insert = (account) => {
    return db('accounts').insert(account)
    .then(ids => {
        return getByID(ids[0])
    })
}

const update = (id, account) => {
    return db("accounts").where({id}).update(account)
}

const remove = (id) => {
    return db("accounts").delete().where({id})
}

module.exports = {
    get,
    getByID,
    insert,
    update,
    remove
}