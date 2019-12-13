"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class DetalleVenta extends Model {
  venta() {
    return this.belongsTo("App/Models/Venta");
  }
}

module.exports = DetalleVenta;
