
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('School', function(table) {
       table.increments('id').primary();
        table.string('name');
        table.string('abbreviation');
        table.string('location');
        
    }),
  ]);
    
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('School'),
  ]);
};
