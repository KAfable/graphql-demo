exports.up = knex =>
  knex.schema.createTable("authors", authors => {
    authors.increments("id"); // yes it should default to ID field
    authors.string("first_name");
  });

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("authors");
};
