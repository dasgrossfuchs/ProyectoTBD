"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "HomeController.index");

// Rutas de Productos
Route.get("/productos", "ProductoController.index"); // R - read
Route.get("/producto/nuevo", "ProductoController.create"); // productos/create.edge
Route.post("/producto/nuevo", "ProductoController.newItem"); // vas a agregar en la base de datos
Route.get("/producto/mostrar/:id", "ProductoController.show"); // R - read
Route.get("/producto/editar/:id", "ProductoController.edit"); // R - read
Route.put("/producto/editar/:id", "ProductoController.update"); // U - update
Route.delete("/producto/eliminar/:id", "ProductoController.delete"); // D - delete

//Rutas de Inventario
Route.get("/inventarios", "InventarioController.index"); // R- read

// Rutas de Ventas
Route.get("/ventas", "VentaController.index");
Route.get("/venta/nueva", "VentaController.create"); // CREATE -> Manda a llamar la vista de ventas/create.edge .. creas un FORM action="/venta/nueva" METHOD="POST"
Route.post("/venta/nueva", "VentaController.newItem"); // Vas a agregar la nueva venta en la base de datos