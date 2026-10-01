// Template da página inicial
window.templates = window.templates || {};

window.templates.home = `
  <div class="container">

    <section>
      <h2>Bem-vindo ao Nosso Site</h2>
      <p>Nós ajudamos pessoas em situação de vulnerabilidade desde 2018. Nossa ONG desenvolve diversos trabalhos na comunidade para apoiar quem mais precisa.</p>

      <figure>
        <picture>
          <source srcset="../assets/img/foto-voluntarios.webp" type="image/webp">
          <img src="../assets/img/foto-voluntarios.jpg"
               alt="Voluntários da ONG reunidos em evento de doação de alimentos"
               width="400"
               height="267"
               loading="lazy">
        </picture>
        <figcaption>Nossa equipe no último evento de doação.</figcaption>
      </figure>
    </section>

    <section>
      <h2>O Que Fazemos</h2>

      <div class="grid">
        <article class="col-12">
          <h3>Nossa Missão</h3>
          <p>Apoiar famílias da comunidade com doação de alimentos e aulas gratuitas.</p>
        </article>

        <article class="col-12">
          <h3>Nossa Visão</h3>
          <p>Crescer e atender toda a cidade nos próximos anos.</p>
        </article>

        <article class="col-12">
          <h3>Nossos Valores</h3>
          <p>Respeito, empatia, honestidade e união.</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Próximos Eventos</h2>
      <p>Confira nossa agenda e participe das próximas ações da ONG.</p>

      <div class="grid">
        ${window.componentes.listaEventos()}
      </div>
    </section>

        <section>
      <h2>Impacto das Doações</h2>
      <p>Acompanhe a evolução das doações recebidas ao longo de 2026.</p>

      <div class="grafico-wrapper">
        <canvas id="grafico-doacoes"></canvas>
      </div>
    </section>

    <section>
      <h2>Fale Conosco</h2>
      <p>Se você tem dúvidas ou quer enviar uma mensagem, use nossos contatos abaixo:</p>

      <address>
        <strong>Endereço:</strong> Rua das Flores, 123 - Centro<br>
        <strong>Telefone:</strong> <a href="tel:+551199999888">(11) 99999-8888</a><br>
        <strong>E-mail:</strong> <a href="mailto:contato.ong@gmail.com">contato.ong@gmail.com</a><br>
        <strong>Horário:</strong> Segunda a sexta, das 8h às 17h
      </address>
    </section>

    <section>
      <h2>Como Participar</h2>
      <p>Quer fazer parte da nossa missão? Entenda as formas de contribuir com a ONG.</p>

      <input type="checkbox" id="modal-toggle" class="modal-toggle" hidden>
      <label for="modal-toggle" class="modal-abrir">Abrir informações</label>

      <div class="modal-overlay">
        <div class="modal" role="dialog" aria-labelledby="modal-titulo">
          <label for="modal-toggle" class="modal-fechar" aria-label="Fechar modal">×</label>
          <h3 id="modal-titulo">Como Participar</h3>
          <p>Existem três formas principais de apoiar a ONG Mãos Dadas:</p>
          <p><strong>1. Voluntariado</strong> — Doe seu tempo em projetos de reforço escolar, oficinas de tecnologia ou apoio logístico.</p>
          <p><strong>2. Doação de Mantimentos</strong> — Recebemos cestas básicas, itens de higiene e roupas na nossa sede.</p>
          <p><strong>3. Doação Financeira</strong> — Contribua via PIX para manter nossos projetos ativos.</p>
          <p>Para saber mais, acesse a <a href="#/cadastro" data-rota="cadastro">página de cadastro</a>.</p>
        </div>
      </div>
    </section>

  </div>
`;