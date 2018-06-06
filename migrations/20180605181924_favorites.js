
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Favorites', function(table) {
        table.integer('user_id').unsigned().notNullable().references('id').inTable('Users');
        table.integer('product_id').unsigned().notNullable().references('id').inTable('Products');
        
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Favorites'),
  ]);
};
