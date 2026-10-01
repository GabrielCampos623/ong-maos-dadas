// main.js — Ponto de entrada da aplicação SPA
// Inicializa todos os módulos da aplicação

document.addEventListener('DOMContentLoaded', () => {

  // Módulos primeiro (registram listeners)
  window.menu.iniciar();
  window.validacao.iniciar();
  window.armazenamento.iniciar();

  // Router por último (dispara eventos que os outros escutam)
  window.router.iniciar();

});