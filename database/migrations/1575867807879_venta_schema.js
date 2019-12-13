'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
    up() {
        this.create('ventas', (table) => {
            table.increments()
            table
                .decimal("ventatotal")
                .notNullable()
                .defaultTo(0)
                .unsigned()
            table.timestamps()
        })
    }

    down() {
        this.drop('ventas')
    }
}

module.exports = VentaSchema