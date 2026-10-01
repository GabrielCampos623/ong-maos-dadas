// Router SPA — gerencia navegação por hash
window.router = {

  rotas: {
    home: 'home',
    projetos: 'projetos',
    cadastro: 'cadastro'
  },

  rotaAtual: 'home',

  // Lê o hash da URL (#/home, #/projetos, #/cadastro)
  obterRotaDoHash() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    return hash || 'home';
  },

  // Troca o conteúdo do <main id="app">
  renderizar(rota) {
    const app = document.getElementById('app');
    if (!app) return;

    const template = window.templates[rota];

    if (!template) {
      app.innerHTML = '<div class="container"><section><h2>Página não encontrada</h2></section></div>';
      return;
    }

    app.innerHTML = template;
    this.rotaAtual = rota;
    this.atualizarMenuAtivo(rota);
    window.scrollTo(0, 0);

    // Dispara evento para outros módulos reagirem
    document.dispatchEvent(new CustomEvent('rota-renderizada', { detail: { rota } }));

    // Inicializa gráficos (se houver na rota atual)
    if (rota === 'home') {
      setTimeout(() => window.componentes.iniciarGraficoDoacoes('grafico-doacoes'), 50);
    }
  },

  // Marca o link ativo no menu
  atualizarMenuAtivo(rota) {
    const links = document.querySelectorAll('[data-rota]');
    links.forEach(link => {
      if (link.getAttribute('data-rota') === rota) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  },

  // Navega para uma rota
  navegar(rota) {
    window.location.hash = `#/${rota}`;
  },

  // Inicializa o roteador
  iniciar() {
    // Renderiza a rota inicial
    const rotaInicial = this.obterRotaDoHash();
    this.renderizar(rotaInicial);

    // Escuta mudanças no hash
    window.addEventListener('hashchange', () => {
      const rota = this.obterRotaDoHash();
      this.renderizar(rota);
    });
  }
};