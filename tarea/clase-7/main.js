//1
console.log("consigna 1")

let productos = new Array ();

function Producto (id, nombre, precio, categoria) {
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;

}


const producto1 = new Producto(1, "leche", 10.99, "A");
const producto2 = new Producto(2, "crema", 19.99, "B");
const producto3 = new Producto(3, "saraza", 15.00, "B");
const producto4 = new Producto(4, "tarasca", 1.00, "C");
const producto5 = new Producto(5, "swichtsmilots", 5.00, "D");

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
console.log(productos);

//2
console.log("consigna 2")

productos.forEach((e) => {
    document.write(`<p>${e.nombre} ${e.precio}</p>`)
})

//3
console.log("consigna 3")

const productosFiltrados = productos.filter(( producto ) => {
    return producto.categoria !== "B"
})

console.log(productosFiltrados)

//4
console.log("consigna 4")

productos.forEach((e) => {
    e.precio = e.precio + (e.precio*0.10);
})

console.log(productos);

//5
console.log("consigna 5")
const reversed = productos.reverse();
console.log('reversed:', reversed);

//6
console.log("consigna 6")

function ProductSearch(productName) {
    const foundProduct = productos.find(product => product.nombre === productName);
    return foundProduct;
}

const productName = prompt("Ingrese el nombre del producto");
const buscar = ProductSearch(productName);

if (buscar) {
    console.log(`Producto encontrado: Nombre: ${buscar.nombre}, Precio: ${buscar.precio}`);
} else {
    console.log("Producto no encontrado");
}


