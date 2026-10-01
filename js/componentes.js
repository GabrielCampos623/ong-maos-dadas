// componentes.js — Funções que geram HTML dinamicamente
// Cada componente recebe dados e retorna uma string de HTML

window.componentes = window.componentes || {};

// Gera a lista de eventos (usado na home)
window.componentes.listaEventos = () => {
  if (!window.dados.eventos || window.dados.eventos.length === 0) {
    return '<p>Nenhum evento agendado no momento.</p>';
  }

  return window.dados.eventos.map(evento => `
    <article class="col-12">
      <span class="badge badge--info">${evento.data}</span>
      <h3>${evento.nome}</h3>
      <p><strong>Horário:</strong> ${evento.hora} | <strong>Local:</strong> ${evento.local}</p>
    </article>
  `).join('');
};

// Gera a lista de áreas de atuação (usado em projetos)
window.componentes.listaAreas = () => {
  if (!window.dados.areas || window.dados.areas.length === 0) {
    return '<p>Nenhuma área cadastrada.</p>';
  }

  return window.dados.areas.map(area => `
    <article class="col-12">
      <span class="badge badge--${area.vagas === 'Abertas' ? 'sucesso' : 'aviso'}">${area.vagas}</span>
      <h3>${area.titulo}</h3>
      <p>${area.descricao}</p>
    </article>
  `).join('');
};

// Inicializa o gráfico de doações (Chart.js)
// Recebe o ID do canvas e desenha o gráfico
window.componentes.iniciarGraficoDoacoes = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Evita duplicação se o gráfico já existe
  if (canvas.dataset.iniciado === 'true') return;
  canvas.dataset.iniciado = 'true';

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: window.dados.doacoes.meses,
      datasets: [{
        label: 'Itens doados',
        data: window.dados.doacoes.valores,
        borderColor: '#0A2A4A',
        backgroundColor: 'rgba(59, 143, 212, 0.15)',
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#3B8FD4',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { color: '#1A1A1A', font: { size: 13, weight: '600' } }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#4A4A4A' },
          grid: { color: 'rgba(217, 225, 232, 0.5)' }
        },
        x: {
          ticks: { color: '#4A4A4A' },
          grid: { display: false }
        }
      }
    }
  });
};