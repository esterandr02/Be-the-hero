
exports.up = function(knex) {              //  metodo up responsavel pela criacao da tabela
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {  // caso de algum problema, deleta a tabela
    return knex.schema.dropTable('ongs');
};
