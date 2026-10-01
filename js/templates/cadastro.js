// Template da página de cadastro
window.templates = window.templates || {};

window.templates.cadastro = `
  <div class="container">

    <section>
      <h2>Formulário de Cadastro</h2>
      <p>Preencha os campos abaixo para se cadastrar como voluntário ou apoiador das nossas causas.</p>

      <div class="alerta alerta--info">
        <div>
          <strong>ℹ️ Informação importante</strong>
          Campos marcados com <strong>*</strong> são de preenchimento obrigatório.
        </div>
      </div>

      <div class="alerta alerta--aviso">
        <div>
          <strong>⚠️ Atenção aos formatos</strong>
          CPF, Telefone e CEP devem seguir os formatos indicados abaixo de cada campo.
        </div>
      </div>

      <div class="alerta alerta--sucesso">
        <div>
          <strong>✅ Dados protegidos</strong>
          Suas informações são usadas apenas para fins de contato e voluntariado, conforme a LGPD.
        </div>
      </div>

      <form action="#" method="post" novalidate>

        <fieldset>
          <legend>Dados Pessoais</legend>

          <p>
            <label for="nome">Nome Completo:*</label>
            <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo" autocomplete="name" minlength="3">
          </p>

          <p>
            <label for="cpf">CPF:*</label>
            <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" maxlength="14" inputmode="numeric" aria-describedby="ajuda-cpf">
            <small id="ajuda-cpf">Formato: 000.000.000-00</small>
          </p>

          <p>
            <label for="nascimento">Data de Nascimento:*</label>
            <input type="date" id="nascimento" name="nascimento" required autocomplete="bday">
          </p>

          <p>
            <label for="email">E-mail:*</label>
            <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com" autocomplete="email">
          </p>

          <p>
            <label for="telefone">Telefone / WhatsApp:*</label>
            <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" maxlength="15" autocomplete="tel" aria-describedby="ajuda-telefone">
            <small id="ajuda-telefone">Formato: (00) 00000-0000</small>
          </p>
        </fieldset>

        <fieldset>
          <legend>Endereço e Localização</legend>

          <p>
            <label for="cep">CEP:*</label>
            <input type="text" id="cep" name="cep" required placeholder="00000-000" pattern="\\d{5}-\\d{3}" maxlength="9" autocomplete="postal-code" inputmode="numeric" aria-describedby="ajuda-cep">
            <small id="ajuda-cep">Formato: 00000-000</small>
          </p>

          <p>
            <label for="rua">Rua / Logradouro:*</label>
            <input type="text" id="rua" name="rua" required placeholder="Nome da rua" autocomplete="street-address">
          </p>

          <p>
            <label for="numero">Número:*</label>
            <input type="text" id="numero" name="numero" required placeholder="Nº" inputmode="numeric">
          </p>

          <p>
            <label for="cidade">Cidade:*</label>
            <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade" autocomplete="address-level2">
          </p>

          <p>
            <label for="estado">Estado (UF):*</label>
            <input type="text" id="estado" name="estado" required placeholder="Ex: SP" pattern="[A-Za-z]{2}" maxlength="2" autocomplete="address-level1" aria-describedby="ajuda-estado">
            <small id="ajuda-estado">Sigla de 2 letras (ex: SP, RJ, MG)</small>
          </p>
        </fieldset>

        <fieldset>
          <legend>Como Quer Contribuir?</legend>

          <p><strong>Tipo de Engajamento:</strong></p>
          <p>
            <input type="checkbox" id="voluntariado" name="tipo_ajuda[]" value="voluntariado">
            <label for="voluntariado">Quero ser Voluntário</label>
          </p>
          <p>
            <input type="checkbox" id="doacao" name="tipo_ajuda[]" value="doacao">
            <label for="doacao">Quero fazer Doações (Mantimentos ou Financeira)</label>
          </p>

          <p><strong>Áreas de Interesse:</strong></p>
          <p>
            <input type="checkbox" id="reforco" name="interesses[]" value="reforco">
            <label for="reforco">Reforço Escolar</label>
          </p>
          <p>
            <input type="checkbox" id="tecnologia" name="interesses[]" value="tecnologia">
            <label for="tecnologia">Oficinas de Tecnologia</label>
          </p>
          <p>
            <input type="checkbox" id="logistica" name="interesses[]" value="logistica">
            <label for="logistica">Apoio Logístico e Cestas Básicas</label>
          </p>

          <p>
            <label for="mensagem">Mensagem / Observação (Opcional):</label>
            <textarea id="mensagem" name="mensagem" rows="4" cols="40" maxlength="500" placeholder="Conte um pouco sobre sua disponibilidade ou motivação..."></textarea>
          </p>
        </fieldset>

        <p>
          <button type="submit"><strong>Enviar Cadastro</strong></button>
          <button type="reset">Limpar Formulário</button>
        </p>

      </form>
    </section>

  </div>
`;