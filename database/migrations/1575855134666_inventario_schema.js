"use strict";
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InventarioSchema extends Schema {
    // adonis migration:run
    up() {
        this.create("inventarios", table => {
            table.increments();
            table
                .integer("producto_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("productos");
            table
                .integer("cantidad_antes")
                .defaultTo(0)
                .notNullable();
            table
                .integer("cantidad_ahora")
                .defaultTo(0)
                .notNullable();
            table.timestamps();
        });
    }

    // adonis migration:rollback
    down() {
        this.drop("inventarios");
    }
}

module.exports = InventarioSchema;