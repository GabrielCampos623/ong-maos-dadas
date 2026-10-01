# ONG Mãos Dadas

Plataforma web para ONG do terceiro setor — SPA com HTML5 semântico, CSS3 avançado, JavaScript vanilla e Chart.js.

## 📋 Descrição

Aplicação front-end desenvolvida para modernizar a presença digital de uma ONG, permitindo divulgar projetos, captar recursos e atrair voluntários. Construída como Single Page Application (SPA), com foco em acessibilidade (WCAG 2.1 AA), performance e arquitetura modular.

## 🚀 Tecnologias Utilizadas

- **HTML5** — estrutura semântica e acessível
- **CSS3** — design system, Grid, Flexbox e responsividade
- **JavaScript (Vanilla)** — SPA com hash routing, validação, máscaras e localStorage
- **Chart.js** — visualização de dados de doações

## 📁 Estrutura do Projeto

ong-maos-dadas/
├── html/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── router.js
│   ├── menu.js
│   ├── validacao.js
│   ├── armazenamento.js
│   ├── dados.js
│   ├── componentes.js
│   └── templates/
│       ├── home.js
│       ├── projetos.js
│       └── cadastro.js
├── assets/
│   └── img/
└── README.md

## 🛠️ Instalação e Execução

1. Clone o repositório:
   git clone https://github.com/GabrielCampos623/ong-maos-dadas.git

2. Abra o arquivo html/index.html em um navegador moderno.

Nota: para melhor experiência (e funcionamento pleno da SPA), recomenda-se rodar via servidor local (Live Server, python -m http.server ou similar).

## ✨ Funcionalidades

- Navegação SPA sem recarregamento (Hash Routing)
- Menu responsivo com hambúrguer (CSS puro)
- Formulário com validação em tempo real
- Máscaras automáticas (CPF, telefone, CEP, estado)
- Persistência de rascunho em localStorage
- Gráfico de doações com Chart.js
- Acessibilidade WCAG 2.1 AA
- Design responsivo (mobile first)

## 🌿 Estratégia de Versionamento (GitFlow)

- main — produção (código estável)
- develop — desenvolvimento
- feature/* — funcionalidades específicas
- hotfix/* — correções urgentes
- release/* — preparação de versão

## 📝 Padrão de Commits

Conventional Commits: feat, fix, docs, style, refactor, chore.

## 📄 Licença

Projeto acadêmico — sem licença definida.