"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductoSchema extends Schema {
  up() {
    this.create("productos", table => {
      table.increments();
      table
        .string("nombre")
        .notNullable()
        .defaultTo("")
        .unique();
      table
        .decimal("precio")
        .defaultTo(0)
        .notNullable();
      table
        .string("marca")
        .defaultTo("marca libre")
        .notNullable();
      table
        .string("presentacion")
        .defaultTo("x pieza")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("productos");
  }
}

module.exports = ProductoSchema;
