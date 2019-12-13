"use strict";
const Inventario = use("App/Models/Inventario");
class InventarioController {
  async index({ view }) {
    const inventario = await Inventario.query()
      .innerJoin("productos", "inventarios.producto_id", "productos.id")
      .fetch();

    return view.render("inventarios/index", { inventario });
  }
}

module.exports = InventarioController;
