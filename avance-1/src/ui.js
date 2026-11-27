export function renderizarTarjetas(lista, contenedor, contadorEl) {
  // Actualizar contador visible
  contadorEl.textContent = lista.length;

  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="empty-msg">No hay proyectos registrados aún.</p>`;
    return;
  }

  // Renderizado dinámico mediante .map() y template literals
  contenedor.innerHTML = lista.map((item) => `
    <article class="card">
      <h3>${item.nombre}</h3>
      <p><strong>Responsable:</strong> ${item.responsable}</p>
      <p><strong>Prioridad:</strong> ${item.prioridad}</p>
      <small>Registrado: ${item.fecha}</small>
    </article>
  `).join('');
}

export function mostrarErrores(errores) {
  ['nombre', 'responsable', 'prioridad'].forEach((campo) => {
    const input = document.getElementById(campo);
    const span = document.getElementById(`err-${campo}`);
    if (errores[campo]) {
      input.classList.add('input-error');
      span.textContent = errores[campo];
    } else {
      input.classList.remove('input-error');
      span.textContent = '';
    }
  });
}