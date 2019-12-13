"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Venta extends Model {
  detalleVentas() {
    return this.hasMany("App/Models/DetalleVenta");
  }

  producto() {
    return this.belongsToMany("App/Models/Producto")
      .pivotModel("App/Models/DetalleVenta")
      .withPivot(["cantidad"]);
  }
}

module.exports = Venta;
