// Importa los datos de los proyectos desde el archivo db.js
import { ochoproyectos } from "../data/db.js";

// Referencia al modal
const modal = document.getElementById("ventanaModal");

// Función para abrir el modal y llenarlo con la información del proyecto seleccionado
function abrirModal(event) {
  // Obtén el id del proyecto desde el elemento clickeado
  const proyectoId = event.target.id;
  console.log("ID del proyecto:", proyectoId);
  
  // Encuentra el proyecto correspondiente en la lista de proyectos
  const proyecto = ochoproyectos.find((item) => item.id === proyectoId);
  console.log("Proyecto encontrado:", proyecto);
  
  // Llena el modal con la información del proyecto
  if (proyecto) {
    // Encuentra los elementos dentro del modal para llenarlos con la información del proyecto
    const modalTitulo = modal.querySelector('.modal-titulo');
    const modalDescripcion = modal.querySelector('.modal-descripcion');
    const modalImagen = modal.querySelector('.modal-imagen');

    // Asigna la información del proyecto a los elementos del modal
    modalTitulo.textContent = proyecto.nombre;
    modalDescripcion.textContent = proyecto.descripcion;
    modalImagen.src = proyecto.imagen;
  }

  // Muestra el modal
  modal.style.display = "block";
}

// Agregar un evento de clic a cada elemento de la galería para abrir el modal correspondiente
const galeriaItems = document.getElementsByClassName("galeria-item");
for (let i = 0; i < galeriaItems.length; i++) {
  galeriaItems[i].addEventListener("click", abrirModal);
}

// Referencia al elemento <span> que tiene la X que cierra la ventana
const span = document.getElementsByClassName("cerrar")[0];

// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
})