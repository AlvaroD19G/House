
 function abrirModalPago() {
 

  const MetodoSelect = document.getElementById("metodopago");
  const metodoSeleccionado = MetodoSelect.options[MetodoSelect.selectedIndex].value;

  if (metodoSeleccionado === "tarjeta") {
    document.getElementById("modalTarjeta").style.display = "block";
} else if  (metodoSeleccionado === "sinpemovil") {
  document.getElementById("modalsinpe").style.display = "block";
 } else if (metodoSeleccionado === "efectivo") {
  document.getElementById("modalefectivo").style.display = "block";
}
  
}

// Función para cerrar la ventana modal
function cerrarModal() {
  document.getElementById("modalTarjeta").style.display = "none";
  document.getElementById("modalsinpe").style.display = "none";
  document.getElementById("modalefectivo").style.display = "none";

  
}

// Event listener para abrir la ventana modal cuando se hace clic en el botón "Pagar con Tarjeta"
document.getElementById("btnpagarcarrito").addEventListener("click", abrirModalPago);










  

 

  

  













