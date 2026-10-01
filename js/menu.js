// menu.js — Comportamento do menu de navegação
// Responsável por: fechamento automático do menu hambúrguer ao clicar em links internos

window.menu = {

  iniciar() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#/"]');
      if (!link) return;

      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) menuToggle.checked = false;
    });
  }

};