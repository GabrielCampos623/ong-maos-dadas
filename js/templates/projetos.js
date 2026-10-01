// Template da página de projetos
window.templates = window.templates || {};

window.templates.projetos = `
  <div class="container">

    <section>
      <h2>Conheça Nossas Frentes de Atuação</h2>
      <p>Aqui você encontra informações sobre nossos projetos sociais, como apoiar com doações ou como se tornar voluntário ativo na comunidade. Venha fazer a diferença com a gente!</p>
    </section>

    <section>
      <h2>Campanhas de Doação</h2>
      <p>Suas doações mantêm nossos projetos vivos. Veja como contribuir:</p>

      <div class="grid">
        <article class="col-12">
          <span class="badge badge--sucesso">Ativo</span>
          <h3>Doação de Alimentos e Mantimentos</h3>
          <p>Recebemos cestas básicas e itens de higiene na nossa sede todas as semanas para distribuição às famílias cadastradas.</p>

          <p><strong>Itens de maior necessidade no momento:</strong></p>
          <ul>
            <li>Arroz, feijão e óleo de cozinha</li>
            <li>Leite em pó e achocolatado</li>
            <li>Sabonete, creme dental e fraldas descartáveis</li>
          </ul>
        </article>

        <article class="col-12">
          <span class="badge badge--aviso">Urgente</span>
          <h3>Doação Financeira via PIX</h3>
          <p>Qualquer valor ajuda a manter nossas atividades diárias e reformar as salas de aula comunitárias.</p>
          <p><strong>Chave PIX (CNPJ):</strong> 12.345.678/0001-90</p>
          <p><strong>Banco:</strong> Banco do Brasil | <strong>Agência:</strong> 1234-5 | <strong>Conta:</strong> 98765-4</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Programa de Voluntariado</h2>
      <p>Precisa de um espaço para aplicar seus conhecimentos e ajudar quem precisa? Nossas portas estão abertas para voluntários de várias áreas.</p>

      <figure>
        <img src="../assets/img/ensinando-ler.jpg"
             alt="Voluntária da ONG ensinando uma criança a ler durante atividade de reforço escolar"
             width="600"
             height="400"
             loading="lazy">
        <figcaption>Voluntária do projeto de reforço escolar.</figcaption>
      </figure>

      <h3>Áreas com Vagas</h3>

      <div class="grid">
        ${window.componentes.listaAreas()}
      </div>

      <h3>Como se Tornar um Voluntário em 4 Passos</h3>
      <ol>
        <li>Acesse a <a href="#/cadastro" data-rota="cadastro">página de cadastro</a> e preencha seus dados de contato.</li>
        <li>Aguarde o contato da equipe para agendar uma conversa presencial ou online.</li>
        <li>Participe do treinamento rápido de integração.</li>
        <li>Comece a atuar na área escolhida e ajude a transformar vidas!</li>
      </ol>
    </section>

    <section>
      <h2>Pronto para Fazer a Diferença?</h2>
      <p>Quer se cadastrar como voluntário ou agendar a entrega de uma doação? Preencha nosso formulário online agora mesmo!</p>
      <p><a href="#/cadastro" data-rota="cadastro"><strong>Ir para a Página de Cadastro →</strong></a></p>
    </section>

  </div>
`;