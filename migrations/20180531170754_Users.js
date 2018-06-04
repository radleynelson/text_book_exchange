
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Products', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.string('ISBN');
    }),
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Products'),
  ]);
};
