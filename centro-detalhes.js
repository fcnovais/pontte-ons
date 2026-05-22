/* Centro de PD&I — detalhes em acordeão inline */
(function () {
  const CHAPTERS = [
    {
      num: '01',
      short: 'Visão & Localização',
      title: 'Polo de excelência<br><em>para o setor elétrico.</em>',
      body: `
        <p>O PONTTE é um Centro de Pesquisa, Desenvolvimento e Inovação (<b>PD&amp;I</b>) estrategicamente concebido para atuar como polo de excelência em inovação para o setor elétrico brasileiro. A iniciativa abrange ações de pesquisa aplicada, desenvolvimento de tecnologias e testes para subestações digitais, visando à certificação e à interoperabilidade, com serviços e soluções específicas para o sistema elétrico.</p>
        <p>O Centro será instalado no <b>Distrito de Inovação de Niterói</b>, em um espaço físico de <b>500 metros quadrados</b>, cedido pela <b>Prefeitura de Niterói</b> — parceira fundamental desta iniciativa, que também atuará ativamente na integração e articulação com outros agentes importantes do município, reforçando o ecossistema de inovação local.</p>
      `
    },
    {
      num: '02',
      short: 'Apoio Institucional',
      title: 'Parceiros estratégicos<br><em>com cartas de apoio.</em>',
      body: `
        <p>A credibilidade e a solidez desta proposta são substancialmente reforçadas pelo apoio institucional de parceiros estratégicos, todos atestados por cartas de apoio recebidas. A <b>UFF (Universidade Federal Fluminense)</b> e a <b>UERJ (Universidade do Estado do Rio de Janeiro)</b> demonstraram seu comprometimento, colaborando com uma perspectiva científica e tecnológica fundamental para a iniciativa.</p>
        <p>Complementarmente, o <b>ONS (Operador Nacional do Sistema Elétrico)</b> não apenas endossa a importância estratégica do centro para o setor elétrico brasileiro, como também se posiciona como agente na proposição e no desenvolvimento das iniciativas do centro, solidificando o alinhamento com as necessidades e avanços do país. A proposta também prevê a <b>cooperação internacional com a IM3</b>, empresa parceira da YSMART, promovendo a troca de conhecimento e a internacionalização dos produtos e serviços do centro.</p>
      `
    },
    {
      num: '03',
      short: 'Infraestrutura & Tecnologia',
      title: 'Laboratórios, plantas piloto<br><em>e capacidade computacional.</em>',
      body: `
        <p>O Centro contará com <b>laboratórios especializados</b>, <b>plantas piloto</b> e <b>ambientes de teste</b> dedicados à validação de novas tecnologias em cenários controlados. Além de sua capacidade técnica, o centro promoverá a inovação colaborativa por meio de espaços de integração projetados para fomentar a cocriação e a sinergia contínua com universidades, empresas e outros agentes de inovação.</p>
        <p>Toda essa infraestrutura será sustentada por um robusto conjunto de hardware e software de ponta, incluindo simuladores de tempo real de grande escala, bancadas de teste, medidores inteligentes, <b>Unidades de Medida Fasorial (PMUs)</b>, <b>Dispositivos Eletrônicos Inteligentes (IEDs)</b> e <b>Merging Units (MUs)</b>. A capacidade computacional será reforçada por estações de trabalho com múltiplas GPUs e uma infraestrutura de servidores e armazenamento otimizada para <b>Big Data Analytics</b>, garantindo excelência em todas as atividades de pesquisa e desenvolvimento.</p>
      `
    },
    {
      num: '04',
      short: 'Governança',
      title: 'Gestão multifuncional<br><em>e multinível.</em>',
      body: `
        <p>A governança do Centro de PD&amp;I adotará um modelo que combina <b>gestão interna com inovação aberta</b>, por meio de comitês multifuncionais e multiníveis. Essa estrutura visa não apenas o alinhamento com os objetivos estratégicos do centro, mas também a inserção contínua de novas ideias, tecnologias e perspectivas externas.</p>
        <p>O <b>Comitê Estratégico</b> é responsável pela definição da visão de longo prazo, aprovação do portfólio de projetos e alocação de recursos de alto nível. O <b>Comitê Tático</b> foca na gestão e acompanhamento dos projetos, avaliação de performance e otimização de recursos. O <b>Comitê Técnico/Operacional</b> encarrega-se da revisão técnica das soluções, validação de protótipos e resolução de desafios tecnológicos. Esses comitês são integrados por representantes de diversas áreas de expertise do centro, parceiros estratégicos e stakeholders, fortalecendo a capacidade de resposta a desafios complexos.</p>
      `
    },
    {
      num: '05',
      short: 'Alinhamento NIB',
      title: 'Aderente à Nova<br><em>Indústria Brasil.</em>',
      body: `
        <p>A proposta apresentada pela <b>YSMART</b> está plenamente alinhada aos objetivos da chamada pública e às missões estabelecidas na <b>Resolução do Conselho Nacional de Desenvolvimento Industrial nº 01/2023</b>, no âmbito da <b>Nova Indústria Brasil (NIB)</b>, especialmente no que se refere à transformação digital da indústria nacional, à transição energética sustentável e à consolidação de cadeias produtivas tecnológicas de maior complexidade.</p>
      `
    }
  ];

  function renderExpansao(host) {
    const COLORS = ['#5a7a1e', '#004f9f', '#F76C00', '#5a7a1e', '#004f9f'];
    host.className = 'cd-exp show';
    host.innerHTML = CHAPTERS.map((c, i) => `
      <div class="cd-exp-row" style="--ec:${COLORS[i % COLORS.length]}" data-i="${i}">
        <button class="cd-exp-head" aria-expanded="false">
          <span class="cd-exp-n">${c.num}</span>
          <span class="cd-exp-t">${c.short}</span>
          <span class="cd-exp-plus">+</span>
        </button>
        <div class="cd-exp-body">
          <div>
            <div class="cd-exp-body-inner">
              <h4 class="cd-chap-title">${c.title}</h4>
              <div class="cd-chap-body">${c.body}</div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    host.querySelectorAll('.cd-exp-head').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = btn.parentElement;
        const wasOpen = row.classList.contains('open');
        row.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(!wasOpen));
      });
    });
  }

  function init() {
    const host = document.getElementById('cd-inline-host');
    if (!host) return;
    renderExpansao(host);
  }

  window.PontteCentro = { init, chapters: CHAPTERS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
