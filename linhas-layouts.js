/* ─────────────────────────────────────────────────────────────
   LINHAS DE PESQUISA · render engine for 10 layouts
   Usage: PontteLinhas.render('acordeon-v') ...
   ───────────────────────────────────────────────────────────── */
(function () {

  const ICONS = {
    seg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 4L6 10V20C6 29 12 36 20 39C28 36 34 29 34 20V10Z" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="15" x2="20" y2="13" stroke="currentColor" stroke-width="1.5"/><line x1="25" y1="20" x2="27" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="25" x2="20" y2="27" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="20" x2="13" y2="20" stroke="currentColor" stroke-width="1.5"/></svg>`,
    ia: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="14" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="26" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="31" cy="14" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="31" cy="26" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="7"  r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="33" r="3" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="15" x2="15" y2="17" stroke="currentColor" stroke-width="1"/><line x1="12" y1="25" x2="15" y2="23" stroke="currentColor" stroke-width="1"/><line x1="28" y1="15" x2="25" y2="17" stroke="currentColor" stroke-width="1"/><line x1="28" y1="25" x2="25" y2="23" stroke="currentColor" stroke-width="1"/><line x1="20" y1="10" x2="20" y2="15" stroke="currentColor" stroke-width="1"/><line x1="20" y1="25" x2="20" y2="30" stroke="currentColor" stroke-width="1"/></svg>`,
    bd: `<svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="13" rx="11" ry="4.5" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="13" x2="9" y2="22" stroke="currentColor" stroke-width="1.5"/><line x1="31" y1="13" x2="31" y2="22" stroke="currentColor" stroke-width="1.5"/><ellipse cx="20" cy="22" rx="11" ry="4.5" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="22" x2="9" y2="31" stroke="currentColor" stroke-width="1.5"/><line x1="31" y1="22" x2="31" y2="31" stroke="currentColor" stroke-width="1.5"/><ellipse cx="20" cy="31" rx="11" ry="4.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
    mon: `<svg viewBox="0 0 40 40" fill="none"><rect x="4" y="9" width="32" height="20" rx="2" stroke="currentColor" stroke-width="1.5"/><polyline points="8,23 14,15 20,19 26,11 32,17" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="16" y1="29" x2="24" y2="29" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="29" x2="20" y2="33" stroke="currentColor" stroke-width="1.5"/></svg>`,
    sub: `<svg viewBox="0 0 40 40" fill="none"><rect x="7" y="24" width="9" height="11" stroke="currentColor" stroke-width="1.5"/><rect x="24" y="24" width="9" height="11" stroke="currentColor" stroke-width="1.5"/><line x1="11.5" y1="6" x2="11.5" y2="24" stroke="currentColor" stroke-width="1.5"/><line x1="28.5" y1="6" x2="28.5" y2="24" stroke="currentColor" stroke-width="1.5"/><line x1="11.5" y1="14" x2="28.5" y2="14" stroke="currentColor" stroke-width="1.5"/><circle cx="11.5" cy="14" r="2.5" fill="currentColor"/><circle cx="28.5" cy="14" r="2.5" fill="currentColor"/><line x1="20" y1="14" x2="20" y2="24" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/></svg>`
  };

  const LINHAS = [
    {
      num: '01',
      cor: '#004f9f',
      titulo: 'Cibersegurança em Infraestruturas Críticas',
      curto: 'Cibersegurança',
      icone: ICONS.seg,
      desc: `Foco na <b>identificação de vulnerabilidades</b> nas arquiteturas e protocolos utilizados em sistemas de automação do setor elétrico. Serão investigadas técnicas de <b>modelagem de ameaças</b>, defesa em profundidade e respostas coordenadas a ataques. Serão utilizados casos reais do sistema elétrico brasileiro e internacional e desenvolvidas soluções aplicáveis em plantas piloto, ambientes reais e eventualmente regulatórios. Entre as tecnologias destacam-se o uso de <b>gêmeos digitais</b> na detecção de ataques e criação de ambientes seguros, bem como o uso de <b>metaverso</b> na formação de profissionais de alta qualificação em cibersegurança para infraestruturas críticas.`
    },
    {
      num: '02',
      cor: '#5a7a1e',
      titulo: 'Inteligência Artificial Aplicada',
      curto: 'IA Aplicada',
      icone: ICONS.ia,
      desc: `Voltada para <b>análise, predição e otimização</b> de sistemas de potência e ativos de infraestrutura crítica. Serão aplicadas técnicas como <b>aprendizado federado, IA explicável, aprendizado profundo e IA generativa</b>, integradas a ferramentas de apoio à decisão — sistemas de detecção de anomalias em tempo real, modelos preditivos para manutenção e interfaces explicativas para operadores. Uma vertente específica tratará da <b>previsão de impactos de mudanças climáticas</b> e eventos severos sobre linhas de transmissão, promovendo ações adaptativas em tempo real.`
    },
    {
      num: '03',
      cor: '#F76C00',
      titulo: 'Big Data e Open Data Setorial',
      curto: 'Big Data',
      icone: ICONS.bd,
      desc: `Ênfase na implementação de um <b>data lake interoperável</b> voltado ao setor elétrico. Serão desenvolvidas arquiteturas para coleta automatizada de dados operacionais através de protocolos padrão como a <b>norma IEC 61850</b>, procedimentos de <b>anonimização conforme a LGPD</b>, modelagem semântica com uso de ontologias setoriais e mecanismos de governança baseados em metadados padronizados. A estrutura viabilizará a disponibilização pública e segura de dados técnicos, <b>em colaboração com o ONS</b>, permitindo o uso por universidades, ICTs e empresas em ambientes de desenvolvimento e validação de algoritmos. Infraestrutura de <b>dados abertos para experimentação científica</b> e inovação aplicada, com governança distribuída.`
    },
    {
      num: '04',
      cor: '#004f9f',
      titulo: 'Monitoramento e Automação',
      curto: 'Monitoramento',
      icone: ICONS.mon,
      desc: `Foco em <b>redes de comunicação de missão crítica</b> e tolerância a falhas em tempo real. Um projeto específico é o aprimoramento de soluções para o <b>monitoramento de subestações digitais</b> que atendam aos requisitos dos procedimentos de rede do ONS. Outra linha aborda o <b>monitoramento ambiental, estrutural e elétrico</b>, com aplicações voltadas à detecção precoce de anomalias, resposta a eventos extremos e operação segura de ativos sob estresse climático.`
    },
    {
      num: '05',
      cor: '#5a7a1e',
      titulo: 'Subestações Digitais',
      curto: 'Subestações',
      icone: ICONS.sub,
      desc: `Foco no <b>desenvolvimento de soluções, testes, certificações e homologações</b> voltadas a esse ambiente. Serão desenvolvidas ferramentas para simulação de cenários operacionais, execução de testes automatizados, <b>verificação de interoperabilidade entre equipamentos de diferentes fabricantes</b> e validação de arquiteturas de redes de automação específicas para subestações digitais. Essa linha visa contribuir diretamente para o aprimoramento, padronização e consolidação do uso da <b>norma IEC 61850 no Brasil</b>, com potencial de induzir normatizações técnicas. Estruturação do Centro como <b>unidade de referência em certificação e homologação</b>, promovendo maior confiabilidade, conformidade regulatória e independência tecnológica para o setor elétrico nacional.`
    }
  ];

  // ── helpers ────────────────────────────────────────────────
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ── 01 acordeon-v ──────────────────────────────────────────
  function renderAcordeonV(t) {
    t.innerHTML = LINHAS.map((l, i) => `
      <div class="lin-item" style="--lc:${l.cor}" data-idx="${i}">
        <div class="lin-head">
          <span class="lin-num">${l.num}</span>
          <span class="lin-icon">${l.icone}</span>
          <h3 class="lin-title">${l.titulo}</h3>
          <span class="lin-chev">+</span>
        </div>
        <div class="lin-body"><div><div class="lin-desc">${l.desc}</div></div></div>
      </div>
    `).join('');
    $$('.lin-head', t).forEach(h => h.addEventListener('click', () => {
      const it = h.parentElement;
      const open = it.classList.contains('open');
      $$('.lin-item', t).forEach(x => x.classList.remove('open'));
      if (!open) it.classList.add('open');
    }));
    t.querySelector('.lin-item').classList.add('open');
  }

  // ── 02 acordeon-h ──────────────────────────────────────────
  function renderAcordeonH(t) {
    t.innerHTML = LINHAS.map((l, i) => `
      <div class="lin-item" style="--lc:${l.cor}" data-idx="${i}">
        <span class="lin-num">${l.num} · LINHA</span>
        <span class="lin-icon-h">${l.icone}</span>
        <h3 class="lin-title-h">${l.titulo}</h3>
        <p class="lin-desc-h">${l.desc}</p>
      </div>
    `).join('');
    const items = $$('.lin-item', t);
    items.forEach(it => it.addEventListener('click', () => {
      items.forEach(x => x.classList.remove('open'));
      it.classList.add('open');
    }));
    items[0].classList.add('open');
  }

  // ── 03 abas-lat ────────────────────────────────────────────
  function renderAbasLat(t) {
    t.innerHTML = `
      <div class="lin-tabs">
        ${LINHAS.map((l, i) => `
          <button class="lin-tab" style="--lc:${l.cor}" data-idx="${i}">
            <span class="num">${l.num}</span>
            <span class="ttl">${l.titulo}</span>
          </button>`).join('')}
      </div>
      <div class="lin-panel" id="lin-panel-lat" style="--lc:${LINHAS[0].cor}"></div>
    `;
    const panel = $('#lin-panel-lat', t);
    const draw = (i) => {
      const l = LINHAS[i];
      panel.style.setProperty('--lc', l.cor);
      panel.innerHTML = `
        <div class="num">${l.num} · LINHA DE PESQUISA</div>
        <span class="ico">${l.icone}</span>
        <h3>${l.titulo}</h3>
        <p>${l.desc}</p>`;
    };
    const tabs = $$('.lin-tab', t);
    tabs.forEach(b => b.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      draw(parseInt(b.dataset.idx, 10));
    }));
    tabs[0].classList.add('active');
    draw(0);
  }

  // ── 04 abas-topo ───────────────────────────────────────────
  function renderAbasTopo(t) {
    t.innerHTML = `
      <div class="lin-tabs-top">
        ${LINHAS.map((l, i) => `
          <button class="lin-tab-top" style="--lc:${l.cor}" data-idx="${i}">
            <span class="num">${l.num}</span>
            <span class="ttl">${l.titulo}</span>
          </button>`).join('')}
      </div>
      <div class="lin-panel-top" id="lin-panel-topo" style="--lc:${LINHAS[0].cor}"></div>
    `;
    const panel = $('#lin-panel-topo', t);
    const draw = (i) => {
      const l = LINHAS[i];
      panel.style.setProperty('--lc', l.cor);
      panel.innerHTML = `
        <div class="left">
          <div class="lin-big-num">${l.num}</div>
          <span class="ico-top">${l.icone}</span>
        </div>
        <div class="right">
          <h3>${l.titulo}</h3>
          <p class="desc">${l.desc}</p>
        </div>`;
    };
    const tabs = $$('.lin-tab-top', t);
    tabs.forEach(b => b.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      draw(parseInt(b.dataset.idx, 10));
    }));
    tabs[0].classList.add('active');
    draw(0);
  }

  // ── 05 carrossel ───────────────────────────────────────────
  function renderCarrossel(t) {
    t.innerHTML = `
      <div class="lin-carro-track">
        ${LINHAS.map((l, i) => `
          <div class="lin-slide" style="--lc:${l.cor}" data-idx="${i}">
            <div class="left">
              <div class="num-big">${l.num}</div>
              <span class="ico">${l.icone}</span>
            </div>
            <div class="right">
              <h3>${l.titulo}</h3>
              <p>${l.desc}</p>
            </div>
          </div>`).join('')}
      </div>
      <div class="lin-arrows">
        <button class="lin-arrow-btn" data-dir="prev" aria-label="Anterior">←</button>
        <button class="lin-arrow-btn" data-dir="next" aria-label="Próximo">→</button>
      </div>
      <div class="lin-controls">
        ${LINHAS.map((_, i) => `<button class="lin-dot" data-idx="${i}" style="--lc:${LINHAS[i].cor}" aria-label="Linha ${i+1}"></button>`).join('')}
      </div>
    `;
    const track = $('.lin-carro-track', t);
    const dots = $$('.lin-dot', t);
    let cur = 0;
    const go = (i) => {
      cur = (i + LINHAS.length) % LINHAS.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, k) => {
        d.classList.toggle('active', k === cur);
        if (k === cur) d.style.background = LINHAS[cur].cor;
        else d.style.background = '';
      });
    };
    $$('.lin-arrow-btn', t).forEach(b => b.addEventListener('click', () => go(cur + (b.dataset.dir === 'next' ? 1 : -1))));
    dots.forEach(d => d.addEventListener('click', () => go(parseInt(d.dataset.idx, 10))));
    go(0);
  }

  // ── 06 stack ───────────────────────────────────────────────
  function renderStack(t) {
    t.innerHTML = LINHAS.map((l, i) => `
      <div class="lin-stack" style="--lc:${l.cor}" data-idx="${i}">
        <div class="num">${l.num} · LINHA DE PESQUISA</div>
        <span class="ico">${l.icone}</span>
        <h3>${l.titulo}</h3>
        <p>${l.desc}</p>
        <div class="lin-stack-hint"><span class="lbl"></span><span class="arrow">→</span></div>
      </div>
    `).join('');
    const cards = $$('.lin-stack', t);
    let top = 0;
    const arrange = () => {
      cards.forEach((c, i) => {
        const pos = (i - top + LINHAS.length) % LINHAS.length;
        c.dataset.pos = pos;
        const lbl = c.querySelector('.lbl');
        if (lbl) lbl.textContent = pos === 0 ? `${top + 1} / ${LINHAS.length} · Clique para a próxima` : '';
      });
    };
    cards.forEach(c => c.addEventListener('click', () => {
      if (parseInt(c.dataset.pos, 10) === 0) {
        top = (top + 1) % LINHAS.length;
        arrange();
      }
    }));
    arrange();
  }

  // ── 07 scroll-sticky ───────────────────────────────────────
  function renderScrollSticky(t) {
    t.innerHTML = `
      <div class="lin-stick">
        <div class="lin-stick-eb">Linhas · ${LINHAS.length}</div>
        <div class="lin-stick-list">
          ${LINHAS.map((l, i) => `
            <a class="lin-stick-item" style="--lc:${l.cor}" data-idx="${i}" href="#lin-sec-${i}">
              <span class="bar"></span>
              <span class="ttl">${l.num}. ${l.curto}</span>
            </a>`).join('')}
        </div>
      </div>
      <div class="lin-stick-content">
        ${LINHAS.map((l, i) => `
          <section class="lin-stick-section" id="lin-sec-${i}" style="--lc:${l.cor}" data-idx="${i}">
            <div class="eb">${l.num} · LINHA DE PESQUISA</div>
            <span class="ico">${l.icone}</span>
            <h3>${l.titulo}</h3>
            <p>${l.desc}</p>
          </section>`).join('')}
      </div>
    `;
    const sections = $$('.lin-stick-section', t);
    const links = $$('.lin-stick-item', t);
    const setActive = (idx) => links.forEach((l, i) => l.classList.toggle('active', i === idx));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(parseInt(e.target.dataset.idx, 10)); });
      }, { rootMargin: '-25% 0px -65% 0px' });
      sections.forEach(s => io.observe(s));
    }
    setActive(0);
  }

  // ── 08 grade-modal ─────────────────────────────────────────
  function renderGradeModal(t) {
    t.innerHTML = LINHAS.map((l, i) => `
      <button class="lin-tile" style="--lc:${l.cor}" data-idx="${i}">
        <div class="top">
          <span class="num">${l.num}</span>
          <span class="ico">${l.icone}</span>
        </div>
        <h4>${l.titulo}</h4>
        <span class="more">Ler mais →</span>
      </button>`).join('');

    let overlay = document.getElementById('lin-drawer-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'lin-drawer-overlay';
      overlay.className = 'lin-drawer-overlay';
      overlay.innerHTML = `
        <aside class="lin-drawer" id="lin-drawer">
          <button class="lin-drawer-close" aria-label="Fechar">✕</button>
          <div class="lin-drawer-content"></div>
        </aside>`;
      document.body.appendChild(overlay);
      const close = () => overlay.classList.remove('open');
      overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
      overlay.querySelector('.lin-drawer-close').addEventListener('click', close);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    }
    const drawer = document.getElementById('lin-drawer');
    const content = drawer.querySelector('.lin-drawer-content');
    const open = (i) => {
      const l = LINHAS[i];
      drawer.style.setProperty('--lc', l.cor);
      drawer.style.borderLeftColor = l.cor;
      content.innerHTML = `
        <div class="eb">LINHA ${l.num} · PESQUISA</div>
        <span class="ico">${l.icone}</span>
        <h3>${l.titulo}</h3>
        <p>${l.desc}</p>`;
      content.style.setProperty('--lc', l.cor);
      overlay.classList.add('open');
    };
    $$('.lin-tile', t).forEach(tile => tile.addEventListener('click', () => open(parseInt(tile.dataset.idx, 10))));
  }

  // ── 09 timeline-h ──────────────────────────────────────────
  function renderTimelineH(t) {
    t.innerHTML = `
      <div class="lin-timeline">
        ${LINHAS.map((l, i) => `
          <button class="lin-dot-wrap" style="--lc:${l.cor}" data-idx="${i}">
            <span class="num">${l.num}</span>
            <span class="dot"></span>
            <span class="label">${l.curto}</span>
          </button>`).join('')}
      </div>
      <div class="lin-tl-panel" id="lin-tl-panel" style="--lc:${LINHAS[0].cor}"></div>
    `;
    const panel = $('#lin-tl-panel', t);
    const draw = (i) => {
      const l = LINHAS[i];
      panel.style.setProperty('--lc', l.cor);
      panel.innerHTML = `
        <div class="grid">
          <span class="ico">${l.icone}</span>
          <div>
            <div class="eb">${l.num} · LINHA DE PESQUISA</div>
            <h3>${l.titulo}</h3>
            <p>${l.desc}</p>
          </div>
        </div>`;
    };
    const wraps = $$('.lin-dot-wrap', t);
    wraps.forEach(w => w.addEventListener('click', () => {
      wraps.forEach(x => x.classList.remove('active'));
      w.classList.add('active');
      draw(parseInt(w.dataset.idx, 10));
    }));
    wraps[0].classList.add('active');
    draw(0);
  }

  // ── 10 expansao ────────────────────────────────────────────
  function renderExpansao(t) {
    t.innerHTML = LINHAS.map((l, i) => `
      <div class="lin-exp" style="--lc:${l.cor}" data-idx="${i}">
        <div class="lin-exp-head">
          <span class="num">${l.num}</span>
          <span class="ico">${l.icone}</span>
          <span class="ttl">${l.titulo}</span>
          <span class="plus">+</span>
        </div>
        <div class="lin-exp-body"><div><div class="desc">${l.desc}</div></div></div>
      </div>
    `).join('');
    $$('.lin-exp-head', t).forEach(h => h.addEventListener('click', () => {
      h.parentElement.classList.toggle('open');
    }));
  }

  const RENDERERS = {
    'acordeon-v':    renderAcordeonV,
    'acordeon-h':    renderAcordeonH,
    'abas-lat':      renderAbasLat,
    'abas-topo':     renderAbasTopo,
    'carrossel':     renderCarrossel,
    'stack':         renderStack,
    'scroll-sticky': renderScrollSticky,
    'grade-modal':   renderGradeModal,
    'timeline-h':    renderTimelineH,
    'expansao':      renderExpansao
  };

  function render(layoutId) {
    const target = document.getElementById('linhas-container');
    if (!target) return;
    target.setAttribute('data-layout', layoutId);
    target.innerHTML = '';
    const fn = RENDERERS[layoutId] || RENDERERS['acordeon-v'];
    fn(target);
  }

  window.PontteLinhas = { render, LAYOUTS: Object.keys(RENDERERS) };

  // Auto-render at load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const t = document.getElementById('linhas-container');
      if (t) render(t.getAttribute('data-layout') || 'acordeon-v');
    });
  } else {
    const t = document.getElementById('linhas-container');
    if (t) render(t.getAttribute('data-layout') || 'acordeon-v');
  }
})();
