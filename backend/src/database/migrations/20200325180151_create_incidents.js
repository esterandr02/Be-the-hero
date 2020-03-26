
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();  // cria uma chave primaria auto-increment
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); // valor a ser doado
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');  // referenciar a chave estrangeira c o id da ong
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
