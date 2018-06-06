exports.up = function(knex, Promise) {
  return knex.schema.table('Products', function(table) {
    table.integer('condition_id').unsigned().notNullable().references('id').inTable('Condition');
    table.integer('category_id').unsigned().notNullable().references('id').inTable('Category');
    table.integer('school_id').unsigned().notNullable().references('id').inTable('School');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Products', function(table) {
    table.dropColumn('condition_id');
    table.dropColumn('category_id');
    table.dropColumn('school_id');
  });
};
