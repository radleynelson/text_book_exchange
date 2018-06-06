exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Users', function(table) {
        table.increments('id').primary();
        table.string('fname');
        table.string('lname');
        table.string('phone');
        table.string('email');
        table.string('hash');
        table.string('gender');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Users'),
  ]);
};
