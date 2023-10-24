// Obtener referencias a elementos HTML
const productos = document.querySelectorAll('.producto');
const carrito = document.getElementById('carrito');
const totalElement = document.getElementById('total');

// Inicializar variables
let carritoItems = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const item = {
        nombre: nombre,
        precio: precio
    };
    carritoItems.push(item);
}

// Actualizar el carrito y el total
function actualizarCarrito() {
    carrito.innerHTML = '';
    total = 0;

    carritoItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.nombre} - $${item.precio}`;
        carrito.appendChild(li);
        total += item.precio;
    });

    totalElement.innerText = total.toFixed(2);
}

// Agregar evento de clic a los botones "Agregar al carrito"
productos.forEach(producto => {
    const agregarBtn = producto.querySelector('.agregar-btn');
    agregarBtn.addEventListener('click', () => {
        const nombre = agregarBtn.getAttribute('data-nombre');
        const precio = parseFloat(agregarBtn.getAttribute('data-precio'));
        agregarAlCarrito(nombre, precio);
        actualizarCarrito();
    });
});
