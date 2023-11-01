module.exports =  class Producto {
    clave;
    descripcion;
    clasificacion;
    existencia;
    existencia_minima;
    existencia_maxima;
    precio;

    constructor(clave, descripcion, clasificacion, existencia, existencia_minima, existencia_maxima, precio) {
        this.clave = clave;
        this.descripcion = descripcion;
        this.clasificacion = clasificacion;
        this.existencia = existencia;
        this.existencia_minima = existencia_minima;
        this.existencia_maxima = existencia_maxima;
        this.precio = precio;
    }

}