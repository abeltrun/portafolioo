// app.js: interactividad del portafolio

// 1. Prueba de conexión
console.log("app.js conectado");

// 2. Año automático en el pie
const anio = new Date().getFullYear();
document.querySelector("#anio").textContent = anio;

// 3. Saludo según la hora
const hora = new Date().getHours();
let saludo = "Buenas noches";
if (hora >= 5 && hora < 12) {
  saludo = "Buenos días";
} else if (hora >= 12 && hora < 19) {
  saludo = "Buenas tardes";
}
const mensaje = `${saludo}, gracias por tu visita`;
document.querySelector("#saludo").textContent = mensaje;

// 4. Modo oscuro
const botonTema = document.querySelector("#boton-tema");
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});

// 5. Servicios dinámicos y contador automático
const servicios = [
  { titulo: "Páginas web", texto: "Sitios informativos claros y ordenados." },
  { titulo: "Diseño adaptable", texto: "Páginas que se ven bien en el celular." },
  { titulo: "Mantenimiento", texto: "Actualización de textos e imágenes." },
  { titulo: "Optimización", texto: "Mejora de velocidad y carga del sitio." }
];

document.getElementById("contador-servicios").textContent = servicios.length;

function crearServicio(servicio) {
  return `<article class="mini-tarjeta"><h3>${servicio.titulo}</h3><p>${servicio.texto}</p></article>`;
}

const listaServicios = document.getElementById("servicios-lista");

for (let servicio of servicios) {
  listaServicios.innerHTML += crearServicio(servicio);
}
