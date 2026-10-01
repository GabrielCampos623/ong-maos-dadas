// validacao.js — Validação de formulários em tempo real + máscaras de input
// Responsável por: validação, feedback visual, formatação automática, prevenção de envio inválido

window.validacao = {

  form: null,

  // Regras de validação por campo
  regras: {
    nome: { obrigatorio: true, min: 3, mensagem: 'Informe seu nome completo (mínimo 3 caracteres).' },
    cpf: { obrigatorio: true, regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, mensagem: 'CPF inválido. Use o formato 000.000.000-00.' },
    nascimento: { obrigatorio: true, mensagem: 'Informe sua data de nascimento.' },
    email: { obrigatorio: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagem: 'E-mail inválido.' },
    telefone: { obrigatorio: true, regex: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, mensagem: 'Telefone inválido. Use (00) 00000-0000.' },
    cep: { obrigatorio: true, regex: /^\d{5}-\d{3}$/, mensagem: 'CEP inválido. Use 00000-000.' },
    rua: { obrigatorio: true, mensagem: 'Informe o nome da rua.' },
    numero: { obrigatorio: true, mensagem: 'Informe o número.' },
    cidade: { obrigatorio: true, mensagem: 'Informe a cidade.' },
    estado: { obrigatorio: true, regex: /^[A-Za-z]{2}$/, mensagem: 'Use a sigla do estado (2 letras).' }
  },

  // Máscaras de formatação automática
  mascaras: {
    cpf(valor) {
      return valor
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    },

    telefone(valor) {
      return valor
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    },

    cep(valor) {
      return valor
        .replace(/\D/g, '')
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, '$1-$2');
    },

    estado(valor) {
      return valor.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();
    }
  },

  // Aplica a máscara apropriada conforme o campo
  aplicarMascara(campo) {
    const nome = campo.name || campo.id;
    const mascara = this.mascaras[nome];
    if (!mascara) return;

    campo.value = mascara(campo.value);
  },

  // Valida um campo específico e exibe feedback
  validarCampo(campo) {
    const nome = campo.name || campo.id;
    const regra = this.regras[nome];
    if (!regra) return true;

    const valor = campo.value.trim();
    let valido = true;
    let mensagem = '';

    if (regra.obrigatorio && valor === '') {
      valido = false;
      mensagem = regra.mensagem;
    }
    else if (regra.min && valor.length < regra.min) {
      valido = false;
      mensagem = regra.mensagem;
    }
    else if (regra.regex && !regra.regex.test(valor)) {
      valido = false;
      mensagem = regra.mensagem;
    }

    this.aplicarFeedback(campo, valido, mensagem);
    return valido;
  },

  // Aplica feedback visual (borda + mensagem)
  aplicarFeedback(campo, valido, mensagem) {
    const wrapper = campo.closest('p');
    if (!wrapper) return;

    const msgAntiga = wrapper.querySelector('.mensagem-erro');
    if (msgAntiga) msgAntiga.remove();

    campo.classList.remove('campo-valido', 'campo-invalido');

    if (valido) {
      if (campo.value.trim() !== '') {
        campo.classList.add('campo-valido');
      }
    } else {
      campo.classList.add('campo-invalido');

      const msg = document.createElement('small');
      msg.className = 'mensagem-erro';
      msg.textContent = mensagem;
      wrapper.appendChild(msg);
    }
  },

  // Valida todos os campos do formulário
  validarTudo() {
    const campos = this.form.querySelectorAll('input, textarea');
    let tudoValido = true;

    campos.forEach(campo => {
      const nome = campo.name || campo.id;
      if (!this.regras[nome]) return;

      const valido = this.validarCampo(campo);
      if (!valido) tudoValido = false;
    });

    return tudoValido;
  },

  // Exibe alerta de sucesso ou erro no topo do formulário
  exibirAlerta(tipo, texto) {
    // Remove alerta anterior
    const anterior = document.querySelector('.alerta-dinamico');
    if (anterior) anterior.remove();

    // Cria o alerta
    const alerta = document.createElement('div');
    alerta.className = `alerta alerta--${tipo} alerta-dinamico`;
    alerta.innerHTML = `<div><strong>${tipo === 'sucesso' ? '✅ Sucesso!' : '❌ Atenção'}</strong> ${texto}</div>`;

    // Insere antes do formulário
    if (this.form && this.form.parentNode) {
      this.form.parentNode.insertBefore(alerta, this.form);
    }

    // Rola até o alerta
    setTimeout(() => {
      alerta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  },

  // Inicializa o módulo
  iniciar() {
    document.addEventListener('input', (event) => {
      const campo = event.target.closest('form input, form textarea');
      if (!campo) return;

      this.aplicarMascara(campo);
      this.validarCampo(campo);
      window.armazenamento.salvarRascunho();
    });

    document.addEventListener('blur', (event) => {
      const campo = event.target.closest('form input, form textarea');
      if (!campo) return;
      this.validarCampo(campo);
    }, true);

    document.addEventListener('submit', (event) => {
      const form = event.target.closest('form');
      if (!form) return;

      console.log('🚀 Submit interceptado!');   // ← ADICIONAR TEMPORARIAMENTE

      event.preventDefault();
      this.form = form;

      console.log('📋 validarTudo():', this.validarTudo());   // ← ADICIONAR TEMPORARIAMENTE

      event.preventDefault();
      this.form = form;

      if (this.validarTudo()) {
        this.exibirAlerta('sucesso', 'Cadastro enviado com sucesso! Entraremos em contato.');
        window.armazenamento.limparRascunho();
        form.reset();

        form.querySelectorAll('.campo-valido, .campo-invalido').forEach(c => {
          c.classList.remove('campo-valido', 'campo-invalido');
        });
      } else {
        this.exibirAlerta('erro', 'Verifique os campos destacados antes de enviar.');
      }
    });

    document.addEventListener('reset', (event) => {
      const form = event.target.closest('form');
      if (!form) return;

      form.querySelectorAll('.campo-valido, .campo-invalido').forEach(c => {
        c.classList.remove('campo-valido', 'campo-invalido');
      });
      form.querySelectorAll('.mensagem-erro').forEach(m => m.remove());

      window.armazenamento.limparRascunho();
    });
  }

};