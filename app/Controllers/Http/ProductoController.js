"use strict";

const Producto = use("App/Models/Producto");
const Inventario = use("App/Models/Inventario");

class ProductoController {
    /**
     *
     * URL: {GET} /productos/
     */
    async index({ view, request }) {
        const productos = await Producto.all(); // SELECT * FROM productos
        return view.render("productos/index", { productos });
    }

    /**
     *
     * URL: {GET} /productos/nuevo/
     */
    create({ view, request }) {
        return view.render("productos/create");
    }

    /**
     *
     * URL: {POST} /productos/nuevo/
     */
    async newItem({ view, request }) {
        const {
            _body: {
                producto_nombre,
                producto_marca,
                producto_precio,
                producto_presentacion,
                inventario_cantidad
            }
        } = request;

        try {
            const producto = new Producto();
            producto.nombre = producto_nombre;
            producto.marca = producto_marca;
            producto.precio = Number(producto_precio);
            producto.presentacion = producto_presentacion;
            await producto.save();

            const inventario = new Inventario()
            inventario.producto_id = producto.id
            inventario.cantidad_antes = Number(inventario_cantidad)
            inventario.cantidad_ahora = Number(inventario_cantidad)
            await inventario.save();

        } catch (exception) {
            return ""
        }
        return "Producto Creado!"
    }

    /**
     *
     * URL: {GET} /producto/mostrar/:id
     */
    async show({ view, request }) {
        const {
            params: { id }
        } = request;
        const producto = await Producto.find(id); // SELECT * FROM productos WHERE id = {:id}

        return view.render("productos/show", { producto });
    }

    /**
     *
     * URL: {GET} /productos/editar/:id
     */
    edit({ view, request }) {
        return view.render("productos/edit");
    }

    /**
     *
     * URL: {PUT} /productos/editar/:id
     */
    update({}) {

    }

    /**
     *
     * URL: /productos/delete/:id
     */
    delete({ view, request }) {
        return {};
    }
}

module.exports = ProductoController;