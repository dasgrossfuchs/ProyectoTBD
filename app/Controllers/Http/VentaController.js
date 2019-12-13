"use strict";

const Producto = use("App/Models/Producto");
const Venta = use("App/Models/Venta");
const DetalleVenta = use("App/Models/DetalleVenta");

class VentaController {
    async index({ view }) {
        const ventas = await Venta.query()
            .with("producto")
            .fetch();

        return view.render("ventas/index", { ventas: ventas.toJSON() });
    }

    async create({ view }) {
        const productos = await Producto.all();
        return view.render("ventas/create", { productos });
    }

    async newItem({ view, request }) {
        const {
            _body: { seleccionados }
        } = request;
        const nuevaLista = Object.values(seleccionados).filter(
            seleccionado =>
            seleccionado.producto_id && Number(seleccionado.cantidad) > 0
        );

        if (nuevaLista.length === 0) {
            return view.render("ventas/fail");
        }

        const idProductos = nuevaLista.map(elemento => elemento.producto_id);
        const productosSeleccionados = await Producto.query()
            .whereIn("id", idProductos)
            .fetch();

        try {
            const totalDeVenta = this.sumarTotal(
                nuevaLista,
                productosSeleccionados.rows
            );

            // Crear Venta
            const venta = new Venta();
            venta.ventatotal = totalDeVenta;
            await venta.save();

            // Crear Detalle Ventas
            const fueronCreados = this.crearDetalleVentas(nuevaLista, venta);

            if (!fueronCreados) {
                await DetalleVenta.query()
                    .where("venta_id", venta.id)
                    .delete();
                await venta.delete();
                return view.render("ventas/fail");
            }

            return view.render("ventas/success", { venta });
        } catch (exception) {
            return view.render("ventas/fail");
        }
    }

    sumarTotal(listaComprada, productos) {
        let total = 0;
        for (const elemento of listaComprada) {
            const producto = productos.find(
                producto => producto.id === Number(elemento.producto_id)
            );

            // Sumamos el Total de la Venta
            total += Number(elemento.cantidad) * producto.precio;
        }
        return total;
    }

    async crearDetalleVentas(lista, venta) {
        for (const elemento of lista) {
            try {
                const detalleVenta = new DetalleVenta();
                detalleVenta.producto_id = Number(elemento.producto_id);
                detalleVenta.venta_id = Number(venta.id);
                detalleVenta.cantidad = Number(elemento.cantidad);
                await detalleVenta.save();
            } catch (exception) {
                return false;
            }
        }

        return true;
    }
}

module.exports = VentaController;