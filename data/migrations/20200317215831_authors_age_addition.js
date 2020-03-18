exports.up = knex =>
  knex.schema.alterTable("authors", authors => {
    authors.integer("age");
  });

exports.down = function(knex) {
  knex.schema.hasColumn("authors", "age").then(function(exists) {
    if (exists) {
      table.dropColumn("age");
    }
  });
};
