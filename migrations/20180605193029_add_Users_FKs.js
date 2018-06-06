exports.up = function(knex, Promise) {
  return knex.schema.table('Users', function(table) {
    table.integer('school_id').unsigned().notNullable().references('id').inTable('School');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Users', function(table) {
    table.dropColumn('school_id');
  });
};
