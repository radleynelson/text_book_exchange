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
        table.integer('school_id').unsigned().notNullable().references('id').inTable('School');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Users'),
  ]);
};



