const KEY = 'avance1_proyectos';

export function getProyectos() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProyectos(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
}