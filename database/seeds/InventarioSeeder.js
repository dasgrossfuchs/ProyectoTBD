'use strict'

/*
|--------------------------------------------------------------------------
| InventarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Producto = use('App/Models/Producto')

// adonis seed --files="InventarioSeeder.js"
class InventarioSeeder {
    async run() {
        const productos = await Producto.all(); // select * from productos;
        productos.rows.forEach(async(producto) => {
            const inventario = await Factory.model('App/Models/Inventario').make()
            inventario.producto_id = producto.id
            inventario.save()
        })
    }
}

module.exports = InventarioSeeder