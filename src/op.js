const productos = [];

function mayus(e) {
    e.value = e.value.toUpperCase();
}

document.getElementById("guardar").onclick = function(){
    const objeto1 = new Producto(
        document.getElementById("nombre").value,
        Number(document.getElementById("precio").value),
        document.getElementById("comercio").value )

    guardarProducto(objeto1);
 //UNA VEZ GUARDADO SE LIMPIAN LOS INPUTS
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("comercio").value = "";

}
class Producto{
    constructor(producto,precio,comercio){
        this.producto= producto;
        this.precio= precio;
        this.comercio= comercio;
        //this.id= "0";
    }
}
function guardarProducto(Producto){
//Producto.id= generarID();
productos.push(Producto);
console.log(productos);
}

function generarID(){
    return productos.length +1;
}
document.getElementById("masBarato").onclick = function(){
    const productosPorNombre = [];

    // Utiliza map para crear un array de productos con el mismo nombre
    const productosMismoNombre = productos.map(function (elemento) {
        return productos.filter(function (producto) {
            return producto.producto === elemento.producto;
        });
    });

    // Itera sobre el array resultante y encuentra el producto más barato de cada grupo
    productosMismoNombre.forEach(function (grupoProductos) {
        const productoMasBarato = grupoProductos.reduce(function (min, producto) {
            if (producto.precio < min.precio) {
                return producto;
            } else {
                return min;
            }
        }, grupoProductos[0]);

        // Almacena el producto más barato en productosPorNombre
        productosPorNombre[productoMasBarato.producto] = productoMasBarato;
    });

    const lista = document.getElementById("menorPrecio");
    lista.innerHTML = ''; // Limpia la lista antes de agregar elementos

    Object.keys(productosPorNombre).forEach(function (nombreProducto) {
        const elemento = productosPorNombre[nombreProducto];
        const opcion = `<li>${elemento.producto} - $${elemento.precio} - ${elemento.comercio}</li>`;
        lista.innerHTML += opcion;
    });

}
document.getElementById("listar").onclick = function(){
    const lista = document.getElementById("listadoProductos");
    lista.innerHTML = "";
    productos.forEach(function(elemento){
    const opcion = ` <li> ${elemento.producto}  - $${elemento.precio} - ${elemento.comercio} </li>` ; 

    lista.innerHTML += opcion;
    });
}