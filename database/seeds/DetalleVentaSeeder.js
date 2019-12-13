'use strict'

/*
|--------------------------------------------------------------------------
| DetalleVentaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Venta = use('App/Models/Venta')

// const Producto = use('App/Models/Producto')

class DetalleVentaSeeder {
    async run() {
        const venta = await Venta.all();

        venta.rows.forEach(async(venta) => {
            const detalleventa = await Factory.model('App/Models/DetalleVenta').make()
            detalleventa.numventa = venta.id
            detalleventa.save()
        })
    }
}

module.exports = DetalleVentaSeeder


// class InventarioSeeder {
//   async run() {
//       const productos = await Producto.select('*');
//       productos.forEach((producto) => {
//           const inventario = Factory.model('App/Models/Inventario').make()
//           inventario.producto_id = producto.id
//           inventario.save()
//       })
//   }
// }/           const inventario = Factory.model('App/Models/Inventario').make()
//           inventario.producto_id = producto.id
//           inventario.save()
//       })
//   }
// }