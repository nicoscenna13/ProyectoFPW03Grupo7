const productos = [];

document.getElementById("guardar").onclick = function(){
const objeto1 = new Producto(
    document.getElementById("nombre").value,
    Number(document.getElementById("precio").value),
    document.getElementById("comercio").value )

    guardarProducto(objeto1);


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

document.getElementById("listar").onclick = function(){
    productos.forEach(function(elemento){
    const opcion = ` <li> ${elemento.producto}  - $${elemento.precio} - ${elemento.comercio} </li>` ; 
    const lista = document.getElementById("listadoProductos");
    lista.innerHTML += opcion;
    });
}