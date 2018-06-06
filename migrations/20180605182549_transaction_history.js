
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Transaction History', function(table) {
        table.integer('seller_id').unsigned().notNullable().references('id').inTable('Users');
        table.integer('buyer_id').unsigned().notNullable().references('id').inTable('Users');
        table.integer('product_id').unsigned().notNullable().references('id').inTable('Products');
        
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Transaction History'),
  ]);
};
