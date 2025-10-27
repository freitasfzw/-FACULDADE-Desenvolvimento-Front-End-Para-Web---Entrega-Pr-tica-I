# ONG Esperança – Plataforma Web

Uma plataforma web completa para ONGs, permitindo gestão de projetos, voluntariado e doações, com interface moderna, responsiva e acessível.

---

## 🚀 Sobre o Projeto

O **ONG Esperança** nasceu como projeto acadêmico da disciplina de Desenvolvimento Web (ADS), unindo os conceitos de HTML5 semântico, CSS3 avançado e JavaScript dinâmico.
O sistema oferece diferentes perfis de usuário:

* **Administrador da ONG:** gerencia projetos, voluntários e doações.
* **Voluntário:** acessa oportunidades, histórico de participação e certificados digitais.
* **Doador/Apoiador:** realiza doações online e acompanha aplicação de recursos.
* **Visitante:** conhece a ONG, projetos e conteúdos públicos.

O objetivo é simular uma aplicação real, com SPA básica, formulários complexos, validação, armazenamento local e design acessível.

---

## 📁 Estrutura do Projeto

```
ong-esperanca/
├── index.html
├── projetos.html
├── cadastro.html
├── assets/
│   ├── css/
│   │   └── styles.css          # Design system e layout responsivo
│   ├── js/
│   │   ├── main.js             # Inicialização
│   │   ├── spa.js              # Sistema SPA
│   │   ├── templates.js        # Templates HTML dinâmicos
│   │   ├── ui.js               # Componentes: modal, toast, menu
│   │   ├── storage.js          # LocalStorage
│   │   └── form.js             # Validação e máscaras
│   └── images/                 # Imagens otimizadas
└── README.md
```

---

## 🎨 Tecnologias e Recursos

* **HTML5 Semântico:** `<header>`, `<main>`, `<section>`, `<footer>`, formulários semânticos e validação nativa.
* **CSS3 Avançado:**

  * Sistema de cores com 8 tons (primárias, secundárias e neutras).
  * Tipografia hierárquica (5 tamanhos).
  * Grid de 12 colunas, Flexbox e 5 breakpoints.
  * Componentes estilizados: cards, botões com estados, badges, formulários, modais, toasts.
* **JavaScript (ES6+):**

  * SPA básica com templates dinâmicos.
  * Validação avançada de formulários e máscaras de CPF, telefone e CEP.
  * LocalStorage para salvar cadastros temporariamente.
  * Feedback visual com toasts e modais.
* **Acessibilidade:**

  * Navegação por teclado e suporte a leitores de tela.
  * Contraste mínimo 4.5:1 para textos.
  * Modo escuro e alto contraste.
* **Versionamento:** Git/GitHub com GitFlow, commits semânticos, releases versionadas.

---

## ⚙️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ong-esperanca.git
cd ong-esperanca
```

2. Abra `index.html` no navegador (não precisa de servidor local, mas pode usar Live Server no VSCode).

3. Navegue pelas páginas e teste o SPA, formulários e cards interativos.

---

## 📌 Funcionalidades

* **Página Inicial:** missão, visão, valores e contatos.
* **Projetos:** lista de projetos sociais, cadastro de voluntariado e sistema de doação simulado.
* **Cadastro:** formulário completo com validação de CPF, telefone, CEP, datas e dados pessoais.
* **SPA Dinâmica:** carregamento de conteúdo sem refresh de página.
* **Feedback Visual:** modais e toasts para sucesso/erro.
* **Responsividade:** compatível com mobile, tablet e desktop.

---

## 🧩 Próximos Passos / Melhorias

* Integração real com API de CEP (ViaCEP) para auto-preenchimento.
* Back-end para persistência de dados (ex: Firebase ou Node.js).
* Dashboard do administrador com métricas reais.
* Otimização de performance e minificação automática para produção.

---

## 📚 Referências e Boas Práticas

* WCAG 2.1 AA – acessibilidade.
* GitFlow – versionamento organizado.
* Semântica HTML5, Flexbox e CSS Grid para responsividade.
* Validação HTML5 nativa + JavaScript customizado.

---

## 👤 Autor

**Seu Nome / Matrícula** – ADS – [GitHub](https://github.com/seu-usuario)
