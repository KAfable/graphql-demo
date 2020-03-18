const db = require("./dbConfig");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // rest of the methods are database access methods
  add(item) {
    return db(this.tableName).insert(item);
  }

  find(id) {
    return db(this.tableName)
      .where({ id })
      .first();
  }
}

const books = new Model("books");
const authors = new Model("authors");

module.exports = { books, authors };
