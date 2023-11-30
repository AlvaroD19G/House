

function agregarAlCarrito(imagenURL, nombre, precio) {
    // Obtener el carrito actual almacenado en localStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Convertir el precio a formato numérico
    var precioNumerico = parseFloat(precio);

    // Verificar si el precio es un número válido
    if (!isNaN(precioNumerico)) {
        // Verificar si el producto ya está en el carrito
        var productoExistente = carrito.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            // Si el producto ya existe, incrementar la cantidad
            productoExistente.cantidad += 1;
        } else {
            // Si el producto no existe, agregarlo con cantidad 1
            var nuevoProducto = { imagen: imagenURL, nombre: nombre, precio: '₡' + precioNumerico.toFixed(2), cantidad: 1 };
            carrito.push(nuevoProducto);
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Mostrar un mensaje indicando que el producto se ha agregado al carrito
        mostrarMensaje('Producto agregado al carrito');
    } else {
        // Si el precio no es un número válido, registrar un mensaje de error en la consola
        console.error('Precio no válido:', precio);
    }
}
// Función para mostrar un mensaje en la pantalla
function mostrarMensaje(mensaje) {
    // Crear un elemento div para el mensaje
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = 'mensaje';

    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(mensajeDiv);

    // Después de 3 segundos, eliminar el mensaje
    setTimeout(function () {
        document.body.removeChild(mensajeDiv);
    }, 3000); // 3000 milisegundos (3 segundos)
}






