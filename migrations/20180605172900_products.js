exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Products', function(table) {
       table.increments('id').primary();
        table.string('title');
        table.string('author');
        table.string('isbn');
        table.string('description');
        table.integer('seller_id').unsigned().notNullable().references('id').inTable('Users');
        table.integer('buyer_id').unsigned().notNullable().references('id').inTable('Users');
        table.boolean('status');
        table.string('course');
        table.string('price');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Products'),
  ]);
};
