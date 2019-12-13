'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory');
const Producto = use("App/Models/Producto");
const Inventario = use("App/Models/Inventario");
const Venta = use("App/Models/Venta");
const DetalleVenta = use("App/Models/DetalleVenta");


Factory.blueprint('App/Models/Producto', (faker) => {
    return {
        nombre: faker.word(),
        precio: faker.integer({ min: 0, max: 9999 }),
        marca: faker.word(),
        presentacion: `${faker.integer({min:1,max:10})} - ${faker.word()}`
    }
})

Factory.blueprint('App/Models/Inventario', (faker) => {
    return {
        cantidad_antes: faker.integer({ min: 0, max: 9999 }),
        cantidad_ahora: faker.integer({ min: 0, max: 9999 }),
    }
})

Factory.blueprint('App/Models/Venta', (faker) => {
    return {
        cantidad_antes: faker.integer({ min: 0, max: 9999 }),
        cantidad_ahora: faker.integer({ min: 0, max: 9999 }),
    }
})