export function validarProyecto({ nombre, responsable, prioridad }) {
  const errores = {};

  if (!nombre || nombre.trim().length < 3) {
    errores.nombre = 'El nombre es obligatorio (mínimo 3 caracteres).';
  }
  if (!responsable || responsable.trim().length < 3) {
    errores.responsable = 'Ingresa el nombre del responsable.';
  }
  if (!prioridad) {
    errores.prioridad = 'Debes seleccionar una prioridad.';
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores
  };
}