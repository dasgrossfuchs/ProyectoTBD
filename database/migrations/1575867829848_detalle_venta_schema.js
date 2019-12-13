'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleVentaSchema extends Schema {
    up() {
        this.create("detalle_ventas", (table) => {
            table.increments()
            table
                .integer("venta_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("ventas");
            table
                .integer("producto_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("productos");
            table
                .integer("cantidad")
                .notNullable()
                .defaultTo(0);
            table.timestamps()
        })
    }

    down() {
        this.drop('detalle_ventas')
    }
}

module.exports = DetalleVentaSchema