const Producto = require('./producto.js');

function cargarProductos() {
    const productosjson = require('./productos.json');
    let prodarr = [];

    productosjson.forEach(p => {
        prodarr.push(new Producto(p.clave,p.descripcion, p.clasificacion, p.existencia, p.existencia_minima, p.existencia_maxima, p.precio));
    });
    return prodarr;
}

function prodClasificacion(productos) {
    let pset = new Map();
    productos.filter(p => p.precio > 15.50).forEach((p) => {
        if(pset.has(p.clasificacion)) {
            pset.get(p.clasificacion).push(p);
        }else{
            pset.set(p.clasificacion,[p]);
        }
    });
    console.log("Productos con precio mayor a $15.50 agrupados por clasificacion");
    for(let [k,v] of pset) {
        console.log(k);
        for(let o of v) {
            console.log("  - " + o.descripcion + " $" + o.precio);
        }
    }
}

function lproductos(productos) {
    let pset = new Map();
    productos.forEach((p) => {
        if(pset.has(p.clasificacion)) {
            pset.set(p.clasificacion, pset.get(p.clasificacion)+1);
        }else{
            pset.set(p.clasificacion,1);
        }
    });
    console.log("Productos agrupados por clasificacion:");
    for(let [k,v] of pset) {
        console.log("  - " + k + ": " + v);
    }
}

let productos = cargarProductos();

console.log(`Productos con no. de existencia mayor a 20: ${
    productos.filter(p => p.existencia > 20).length
}`);
console.log(`Productos con no. de existencia menor a 15: ${
    productos.filter(p => p.existencia < 15).length
}`);

prodClasificacion(productos);

console.log("Productos con precio mayor a 20.30 y menor a 45.00:");
productos.filter(p => 20.30 < p.precio < 45.00).forEach(p => console.log("  - "+p.descripcion));

lproductos(productos);
