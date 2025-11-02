// === 1. Aplicar tema guardado antes de renderizar ===
(function () {
  const temaGuardado = localStorage.getItem('tema-color');
  if (temaGuardado) {
    document.documentElement.style.setProperty('--color-principal', temaGuardado);
    document.documentElement.style.visibility = 'hidden';
  }
  window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.visibility = 'visible';
  });
})();

// === 2. Mostrar/ocultar menú ===
document.addEventListener('DOMContentLoaded', () => {
  const botonTema = document.getElementById('boton-tema');
  const menuTema = document.getElementById('menu-tema');

  if (!botonTema || !menuTema) return;

  botonTema.addEventListener('click', () => {
    // toggle usando clase
    menuTema.classList.toggle('activo');
  });

  const colores = document.querySelectorAll('.menu-tema .color');
  colores.forEach(color => {
    color.addEventListener('click', () => {
      let colorPrincipal;
      switch (color.dataset.color) {
        case 'rojo': colorPrincipal = '#ff0033'; break;
        case 'amarillo': colorPrincipal = '#ffc400'; break;
        case 'azul': colorPrincipal = '#00bfff'; break;
        case 'verde': colorPrincipal = '#00ff66'; break;
      }
      document.documentElement.style.setProperty('--color-principal', colorPrincipal);
      localStorage.setItem('tema-color', colorPrincipal);
      menuTema.classList.remove('activo');
    });
  });
});
