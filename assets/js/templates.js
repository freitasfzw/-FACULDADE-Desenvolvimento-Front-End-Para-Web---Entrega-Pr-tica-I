
/* templates.js - funções que retornam trechos HTML (templates) para o SPA */
(function(global){
  const T = {};

  T.home = function(){
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="card">
          <h2 id="hero-title">Nossa missão: apoiar comunidades</h2>
          <p>Somos uma organização dedicada a promover educação e saúde. Atuamos em projetos locais com foco em impacto mensurável.</p>
          <p><a class="btn btn-primary" href="#/projetos" data-route="projetos">Ver projetos →</a></p>
        </div>
        <figure aria-hidden="false">
          <img src="assets/images/sp_criancas_ongs-apoiam-criancas-brasil1.jpg" alt="Equipe em ação" loading="lazy" width="640" height="360">
        </figure>
      </section>

      <section class="card" aria-labelledby="about">
        <h2 id="about">Sobre a organização</h2>
        <p>Fundada em 2015, nossa ONG atua nas áreas de educação e saúde preventiva. Principais valores: transparência, respeito e impacto.</p>
        <address>
          <strong>Contato</strong><br> Rua Exemplo, 123 — Cidade/UF<br>
          <a href="tel:+5511999999999">+55 (11) 99999-9999</a> • <a href="mailto:contato@ongesperanca.org">contato@ongesperanca.org</a>
        </address>
      </section>
    `;
  };

  T.projetos = function(){
    return `
      <h1>Projetos sociais</h1>
      <p>Conheça nossos principais programas e como você pode participar.</p>
      <section class="project-grid" aria-label="Projetos">
        <article class="project-card card">
          <img src="assets/images/projeto1.jpg" alt="Oficina de leitura">
          <div style="padding:8px">
            <h3>Projeto Educação</h3>
            <p>Oficinas de leitura, reforço escolar e capacitação de professores.</p>
            <div class="meta"><span class="badge">Educação</span></div>
          </div>
        </article>

        <article class="project-card card">
          <img src="assets/images/projeto2.jpg" alt="Plantio de mudas">
          <div style="padding:8px">
            <h3>Projeto Verde Esperança</h3>
            <p>Plantio de árvores e educação ambiental em escolas públicas.</p>
            <div class="meta"><span class="badge">Meio Ambiente</span></div>
          </div>
        </article>
      </section>
    `;
  };

  T.cadastro = function(){
    return `
      <h1>Cadastro de Voluntário / Doador</h1>
      <form id="formCadastro" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for="nome">Nome completo *</label>
          <input id="nome" name="nome" type="text" required minlength="3" placeholder="Seu nome completo">

          <label for="email">E-mail *</label>
          <input id="email" name="email" type="email" required placeholder="seu@exemplo.com">

          <label for="cpf">CPF *</label>
          <input id="cpf" name="cpf" inputmode="numeric" type="text" required placeholder="000.000.000-00" maxlength="14" aria-describedby="cpfHelp">
          <small id="cpfHelp" class="muted">Formato: 000.000.000-00</small>

          <label for="nascimento">Data de nascimento</label>
          <input id="nascimento" name="nascimento" type="date" max="2007-12-31">
        </fieldset>

        <fieldset>
          <legend>Contato e endereço</legend>
          <label for="telefone">Telefone *</label>
          <input id="telefone" name="telefone" type="tel" required placeholder="(00) 90000-0000">
          <label for="cep">CEP *</label>
          <input id="cep" name="cep" type="text" required placeholder="00000-000">
          <label for="endereco">Endereço</label>
          <input id="endereco" name="endereco" type="text" placeholder="Rua, número">
          <div style="display:grid;grid-template-columns:1fr 140px;gap:.5rem">
            <div><label for="cidade">Cidade</label><input id="cidade" name="cidade" type="text"></div>
            <div><label for="estado">Estado</label><select id="estado" name="estado"><option value=''>UF</option><option>SP</option><option>RJ</option><option>MG</option></select></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Preferências</legend>
          <label for="tipo">Perfil</label>
          <select id="tipo" name="tipo" required><option value=''>Selecione</option><option value='voluntario'>Voluntário</option><option value='doador'>Doador</option></select>
          <label for="obs">Observações</label>
          <textarea id="obs" name="obs" rows="4" placeholder="Conte-nos algo sobre você"></textarea>
        </fieldset>

        <div class="actions" style="margin-top:12px">
          <button type="submit" class="btn btn-primary">Enviar cadastro</button>
          <button type="reset" class="btn btn-ghost">Limpar</button>
        </div>
      </form>
    `;
  };

  T.cadastros = function(listHTML){
    return `
      <h1>Cadastros salvos</h1>
      <section class="card">
        <p>Registros armazenados em <code>localStorage</code>. Use o formulário para adicionar novos registros.</p>
        <div id="cadastrosList">${listHTML || '<p>Nenhum cadastro salvo.</p>'}</div>
      </section>
    `;
  };

  T.sobre = function(){
    return `
      <section class="card">
        <h1>Sobre</h1>
        <p>Projeto demonstrativo para a disciplina — integração HTML5, CSS3 e JavaScript (SPA, validação e armazenamento local).</p>
      </section>
    `;
  };

  global.Templates = T;
})(window);
