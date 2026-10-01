// dados.js — Fonte de dados da aplicação
// Centraliza arrays de objetos que alimentam componentes dinâmicos

window.dados = window.dados || {};

// Próximos eventos da ONG (usados na home)
window.dados.eventos = [
  { data: "15/10", nome: "Show Beneficente da Banda X", hora: "20h", local: "Sede da ONG" },
  { data: "02/11", nome: "Festa de Aniversário da ONG", hora: "19h", local: "Salão Comunitário" },
  { data: "20/12", nome: "Natal Solidário", hora: "18h", local: "Praça Central" },
  { data: "10/01", nome: "Campanha de Doação de Sangue", hora: "08h", local: "Hemocentro Regional" }
];

// Áreas de atuação (usadas em projetos)
window.dados.areas = [
  { titulo: "Reforço Escolar", descricao: "Aulas de matemática e português para crianças do ensino fundamental.", vagas: "Abertas" },
  { titulo: "Oficinas de Tecnologia", descricao: "Ensino básico de informática e uso de computadores.", vagas: "Abertas" },
  { titulo: "Apoio Logístico", descricao: "Separação e organização das cestas básicas na sede da ONG.", vagas: "Abertas" },
  { titulo: "Comunicação e Redes Sociais", descricao: "Produção de conteúdo e gestão das redes sociais da ONG.", vagas: "Em breve" }
];

// Dados para o gráfico de doações (usado com Chart.js)
window.dados.doacoes = {
  meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  valores: [120, 180, 150, 220, 280, 310, 290, 350, 400, 380, 420, 480]
};