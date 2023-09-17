import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('usuarios', function(table) {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('senha').notNullable();
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('usuarios');
}

