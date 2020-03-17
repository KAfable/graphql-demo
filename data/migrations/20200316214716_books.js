exports.up = knex =>
  knex.schema.createTable("books", books => {
    books.increments();
    books.string("title");
    books.integer("page_count");
    // per schema, this should be an ENUM
    books.string("genre");
    books
      .integer("author_id")
      .notNullable()
      .references("id")
      .inTable("authors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // books.foreign("id").references("authors");
  });
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
