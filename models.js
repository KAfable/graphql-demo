const db = require("./dbConfig");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // rest of the methods are database access methods
  // object with the appropriate key value traits
  add(item) {
    return db(this.tableName).insert(item);
  }
}

books = new Model("books");
authors = new Model("authors");

module.exports = { books, authors };
