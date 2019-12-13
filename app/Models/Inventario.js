"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Inventario extends Model {
  producto() {
    return this.belongsTo("App/Models/Producto");
  }
}

module.exports = Inventario;
