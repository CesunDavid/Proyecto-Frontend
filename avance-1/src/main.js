import './style.css';
import { getProyectos, saveProyectos } from './storage.js';
import { validarProyecto } from './validation.js';
import { renderizarTarjetas, mostrarErrores } from './ui.js';

const form = document.getElementById('project-form');
const grid = document.getElementById('cards-grid');
const counter = document.getElementById('project-counter');

let proyectos = getProyectos();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const datos = {
    nombre: form.nombre.value,
    responsable: form.responsable.value,
    prioridad: form.prioridad.value
  };

  const { esValido, errores } = validarProyecto(datos);
  mostrarErrores(errores);

  if (!esValido) return;

  const nuevoProyecto = {
    id: Date.now(),
    nombre: datos.nombre.trim(),
    responsable: datos.responsable.trim(),
    prioridad: datos.prioridad,
    fecha: new Date().toLocaleDateString()
  };

  proyectos = [nuevoProyecto, ...proyectos];
  saveProyectos(proyectos);
  renderizarTarjetas(proyectos, grid, counter);
  form.reset();
});

// Carga inicial al abrir la página
renderizarTarjetas(proyectos, grid, counter);