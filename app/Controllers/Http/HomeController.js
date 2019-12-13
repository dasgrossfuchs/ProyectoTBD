'use strict'

const Venta = use("App/Models/Venta")

class HomeController {
    async index({ view }) {

        // https://adonisjs.com/docs/4.1/lucid#_getcountcolumnname
        // SELECT COUNT(*) FROM venta
        const contador = await Venta.getCount()
        return view.render("welcome", { contador });


    }

}

module.exports = HomeController