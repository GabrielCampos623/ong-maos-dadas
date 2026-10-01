// armazenamento.js — Persistência de dados via localStorage
// Responsável por: salvar/recuperar rascunho do formulário, evitar perda de contexto

window.armazenamento = {

  CHAVE_RASCUNHO: 'ong_rascunho_cadastro',

  // Salva o estado atual do formulário como rascunho
  salvarRascunho() {
    const form = document.querySelector('form');
    if (!form) return;

    const dados = {};

    // Coleta todos os campos de texto/email/etc
    form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="date"], textarea').forEach(campo => {
      if (campo.name) dados[campo.name] = campo.value;
    });

    // Coleta checkboxes marcados
    const checkboxes = {};
    form.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (cb.name) {
        if (!checkboxes[cb.name]) checkboxes[cb.name] = [];
        if (cb.checked) checkboxes[cb.name].push(cb.value);
      }
    });

    dados.__checkboxes = checkboxes;

    try {
      localStorage.setItem(this.CHAVE_RASCUNHO, JSON.stringify(dados));
    } catch (e) {
      console.warn('Não foi possível salvar o rascunho:', e);
    }
  },

  // Recupera o rascunho salvo e preenche o formulário
  recuperarRascunho() {
    const form = document.querySelector('form');
    if (!form) return;

    const dadosSalvos = localStorage.getItem(this.CHAVE_RASCUNHO);
    if (!dadosSalvos) return;

    try {
      const dados = JSON.parse(dadosSalvos);

      // Preenche campos de texto
      Object.keys(dados).forEach(chave => {
        if (chave === '__checkboxes') return;

        const campo = form.querySelector(`[name="${chave}"]`);
        if (campo) campo.value = dados[chave];
      });

      // Preenche checkboxes
      if (dados.__checkboxes) {
        Object.keys(dados.__checkboxes).forEach(nome => {
          const valores = dados.__checkboxes[nome];
          form.querySelectorAll(`input[name="${nome}"]`).forEach(cb => {
            cb.checked = valores.includes(cb.value);
          });
        });
      }
    } catch (e) {
      console.warn('Rascunho corrompido, ignorando:', e);
    }
  },

  // Remove o rascunho (chamado após envio bem-sucedido ou reset)
  limparRascunho() {
    localStorage.removeItem(this.CHAVE_RASCUNHO);
  },

  // Inicializa o módulo
  iniciar() {
    // Sempre que um template é renderizado, tenta recuperar o rascunho
    document.addEventListener('rota-renderizada', () => {
      // Delay para aguardar a inserção no DOM
      setTimeout(() => this.recuperarRascunho(), 50);
    });
  }

};