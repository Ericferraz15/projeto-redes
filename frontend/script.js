document.addEventListener('DOMContentLoaded', () => {

  // ===================================================
  // 1. Renderização Dinâmica da Equipe
  // ===================================================
  const equipe = [
    {
      nome: 'Eric Ferraz',
      funcao: 'Responsável pela infraestrutura de rede, topologia no Cisco Packet Tracer e configuração de roteamento.'
    },
    {
      nome: 'Gabriel Antunes',
      funcao: 'Responsável pelo desenvolvimento Front-End (HTML, CSS e JavaScript).'
    },
    {
      nome: 'Lucas Sabino',
      funcao: 'Responsável pelo desenvolvimento Front-End (HTML, CSS e JavaScript).'
    },
    {
      nome: 'Francisco Maganhotto',
      funcao: 'Responsável pela elaboração e redação do artigo técnico.'
    },
    {
      nome: 'Wayron de Souza',
      funcao: 'Responsável pela elaboração e redação do artigo técnico.'
    }
  ];

  const gridEquipe = document.getElementById('grid-equipe');

  equipe.forEach((membro) => {
    const article = document.createElement('article');
    article.classList.add('card-membro');

    // Gera as iniciais para o avatar
    const iniciais = membro.nome
      .split(' ')
      .map((p) => p[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    article.innerHTML = `
      <div class="avatar" aria-hidden="true">${iniciais}</div>
      <h3>${membro.nome}</h3>
      <p>${membro.funcao}</p>
    `;

    gridEquipe.appendChild(article);
  });

  // ===================================================
  // 2. Intersection Observer — Animações de Entrada
  // ===================================================
  const secoes = document.querySelectorAll('.escondido');

  const observerOptions = {
    root: null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, observerOptions);

  secoes.forEach((secao) => observer.observe(secao));

  // ===================================================
  // 3. Botão de Saudação
  // ===================================================
  const btnSaudacao = document.getElementById('btn-saudacao');

  btnSaudacao.addEventListener('click', () => {
    alert('esse é um alerta pra você! Bem-vindo à nossa página hospedada na máquina 01.');
  });

  // ===================================================
  // 4. Botão de Tema (Modo Escuro)
  // ===================================================
  const btnTema = document.getElementById('btn-tema');

  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      btnTema.textContent = 'Desativar Modo Escuro';
      btnTema.style.background = 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)';
    } else {
      btnTema.textContent = 'Ativar Modo Escuro';
      btnTema.style.background = 'linear-gradient(135deg, #38a169 0%, #2f855a 100%)';
    }
  });

});