/* ════════════════════════════════════════════════════════════════
   CENTRO · DETALHES — 10 patterns for the long PD&I content.
   Single source of truth: CHAPTERS. All layouts hydrate from it.
   ════════════════════════════════════════════════════════════════ */
(function () {
  // ── Chapters (5, less fragmented, narrative prose) ───────────
  const CHAPTERS = [
    {
      id: 'visao',
      num: '01',
      short: 'Visão & Localização',
      title: 'Polo de excelência<br><em>para o setor elétrico.</em>',
      body: `
        <p>O PONTTE é um Centro de Pesquisa, Desenvolvimento e Inovação (<b>PD&amp;I</b>) estrategicamente concebido para atuar como polo de excelência em inovação para o setor elétrico brasileiro. A iniciativa abrange ações de pesquisa aplicada, desenvolvimento de tecnologias e testes para subestações digitais, visando à certificação e à interoperabilidade, com serviços e soluções específicas para o sistema elétrico.</p>
        <p>O Centro será instalado no <b>Distrito de Inovação de Niterói</b>, em um espaço físico de <b>500 metros quadrados</b>, cedido pela <b>Prefeitura de Niterói</b> — parceira fundamental desta iniciativa, que também atuará ativamente na integração e articulação com outros agentes importantes do município, reforçando o ecossistema de inovação local.</p>
      `
    },
    {
      id: 'parceiros',
      num: '02',
      short: 'Apoio Institucional',
      title: 'Parceiros estratégicos<br><em>com cartas de apoio.</em>',
      body: `
        <p>A credibilidade e a solidez desta proposta são substancialmente reforçadas pelo apoio institucional de parceiros estratégicos, todos atestados por cartas de apoio recebidas. A <b>UFF (Universidade Federal Fluminense)</b> e a <b>UERJ (Universidade do Estado do Rio de Janeiro)</b> demonstraram seu comprometimento, colaborando com uma perspectiva científica e tecnológica fundamental para a iniciativa.</p>
        <p>Complementarmente, o <b>ONS (Operador Nacional do Sistema Elétrico)</b> não apenas endossa a importância estratégica do centro para o setor elétrico brasileiro, como também se posiciona como agente na proposição e no desenvolvimento das iniciativas do centro, solidificando o alinhamento com as necessidades e avanços do país. A proposta também prevê a <b>cooperação internacional com a IM3</b>, empresa parceira da YSMART, promovendo a troca de conhecimento e a internacionalização dos produtos e serviços do centro.</p>
      `
    },
    {
      id: 'infraestrutura',
      num: '03',
      short: 'Infraestrutura & Tecnologia',
      title: 'Laboratórios, plantas piloto<br><em>e capacidade computacional.</em>',
      body: `
        <p>O Centro contará com <b>laboratórios especializados</b>, <b>plantas piloto</b> e <b>ambientes de teste</b> dedicados à validação de novas tecnologias em cenários controlados. Além de sua capacidade técnica, o centro promoverá a inovação colaborativa por meio de espaços de integração projetados para fomentar a cocriação e a sinergia contínua com universidades, empresas e outros agentes de inovação.</p>
        <p>Toda essa infraestrutura será sustentada por um robusto conjunto de hardware e software de ponta, incluindo simuladores de tempo real de grande escala, bancadas de teste, medidores inteligentes, <b>Unidades de Medida Fasorial (PMUs)</b>, <b>Dispositivos Eletrônicos Inteligentes (IEDs)</b> e <b>Merging Units (MUs)</b>. A capacidade computacional será reforçada por estações de trabalho com múltiplas GPUs e uma infraestrutura de servidores e armazenamento otimizada para <b>Big Data Analytics</b>, garantindo excelência em todas as atividades de pesquisa e desenvolvimento.</p>
      `
    },
    {
      id: 'governanca',
      num: '04',
      short: 'Governança',
      title: 'Gestão multifuncional<br><em>e multinível.</em>',
      body: `
        <p>A governança do Centro de PD&amp;I adotará um modelo que combina <b>gestão interna com inovação aberta</b>, por meio de comitês multifuncionais e multiníveis. Essa estrutura visa não apenas o alinhamento com os objetivos estratégicos do centro, mas também a inserção contínua de novas ideias, tecnologias e perspectivas externas.</p>
        <p>O <b>Comitê Estratégico</b> é responsável pela definição da visão de longo prazo, aprovação do portfólio de projetos e alocação de recursos de alto nível. O <b>Comitê Tático</b> foca na gestão e acompanhamento dos projetos, avaliação de performance e otimização de recursos. O <b>Comitê Técnico/Operacional</b> encarrega-se da revisão técnica das soluções, validação de protótipos e resolução de desafios tecnológicos. Esses comitês são integrados por representantes de diversas áreas de expertise do centro, parceiros estratégicos e stakeholders, fortalecendo a capacidade de resposta a desafios complexos.</p>
      `
    },
    {
      id: 'alinhamento',
      num: '05',
      short: 'Alinhamento NIB',
      title: 'Aderente à Nova<br><em>Indústria Brasil.</em>',
      body: `
        <p>A proposta apresentada pela <b>YSMART</b> está plenamente alinhada aos objetivos da chamada pública e às missões estabelecidas na <b>Resolução do Conselho Nacional de Desenvolvimento Industrial nº 01/2023</b>, no âmbito da <b>Nova Indústria Brasil (NIB)</b>, especialmente no que se refere à transformação digital da indústria nacional, à transição energética sustentável e à consolidação de cadeias produtivas tecnológicas de maior complexidade.</p>
      `
    }
  ];

  // ── Helpers ──────────────────────────────────────────────────
  function renderChapter(node, idx, opts = {}) {
    const c = CHAPTERS[idx];
    if (!c || !node) return;
    const numEl   = opts.numEl   || node.querySelector('.cd-chap-num');
    const titleEl = opts.titleEl || node.querySelector('.cd-chap-title');
    const bodyEl  = opts.bodyEl  || node.querySelector('.cd-chap-body');
    if (numEl)   numEl.textContent  = `Capítulo ${c.num}`;
    if (titleEl) titleEl.innerHTML  = c.title;
    if (bodyEl)  bodyEl.innerHTML   = c.body;
  }

  function lock()   { document.body.classList.add('cd-locked'); }
  function unlock() { document.body.classList.remove('cd-locked'); }

  // ── Build modal/overlay containers once ─────────────────────
  function buildAll() {
    if (document.getElementById('cd-overlays')) return;
    const host = document.createElement('div');
    host.id = 'cd-overlays';
    host.innerHTML = `
      <div class="cd-backdrop" id="cd-backdrop"></div>

      <!-- DRAWER-ESQ -->
      <div class="cd-drawer-l" id="cd-drawer-l" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cd-drawer-l-head">
          <div>
            <div class="cd-drawer-l-eyebrow">Centro de PD&amp;I</div>
            <div class="cd-drawer-l-title">Detalhamento completo</div>
          </div>
          <div class="cd-drawer-l-progress">
            <span class="cur">01</span> / ${String(CHAPTERS.length).padStart(2,'0')}
          </div>
          <button class="cd-x dark" aria-label="Fechar">✕</button>
        </div>
        <div class="cd-drawer-l-body">
          <span class="cd-chap-num"></span>
          <h3 class="cd-chap-title"></h3>
          <div class="cd-chap-body"></div>
        </div>
        <div class="cd-drawer-l-foot">
          <button class="prev">← Anterior</button>
          <button class="next">Próximo →</button>
        </div>
      </div>

      <!-- FULLSCREEN -->
      <div class="cd-fs" id="cd-fs" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cd-fs-top">
          <div class="cd-fs-eb">PONTTE · Centro de PD&amp;I <b>Detalhamento completo</b></div>
          <div class="cd-fs-progress">
            ${CHAPTERS.map((_,i)=>`<span data-i="${i}"></span>`).join('')}
          </div>
          <button class="cd-x" aria-label="Fechar" style="position:static;">✕</button>
        </div>
        <div class="cd-fs-stage">
          <div class="cd-fs-big">${CHAPTERS[0].num}</div>
          <div class="cd-fs-text cd-on-dark">
            <span class="cd-chap-num"></span>
            <h3 class="cd-chap-title"></h3>
            <div class="cd-chap-body"></div>
          </div>
        </div>
        <div class="cd-fs-foot">
          <button class="prev">← Anterior</button>
          <span class="hint">← → para navegar · ESC para fechar</span>
          <button class="next">Próximo →</button>
        </div>
      </div>

      <!-- DECK -->
      <div class="cd-deck" id="cd-deck" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cd-deck-stack">
          ${CHAPTERS.map((c,i)=>`
            <div class="cd-deck-card" data-i="${i}">
              <span class="cd-deck-num">${c.num}</span>
              <span class="cd-chap-num">Capítulo ${c.num}</span>
              <h3 class="cd-chap-title">${c.title}</h3>
              <div class="cd-chap-body">${c.body}</div>
            </div>`).join('')}
        </div>
        <div class="cd-deck-nav">
          <button class="prev">← Anterior</button>
          <div class="dots">
            ${CHAPTERS.map((_,i)=>`<span data-i="${i}"></span>`).join('')}
          </div>
          <button class="next">Próximo →</button>
        </div>
      </div>

      <!-- COMMAND PALETTE -->
      <div class="cd-cmd" id="cd-cmd" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cd-cmd-input">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/>
          </svg>
          <input type="text" placeholder="Buscar tópicos do Centro de PD&I…" autocomplete="off">
          <span class="kbd">ESC</span>
        </div>
        <ul class="cd-cmd-list">
          ${CHAPTERS.map((c,i)=>`<li data-i="${i}"><span class="n">${c.num}</span><span class="t">${c.short}</span><span class="h">Capítulo</span></li>`).join('')}
        </ul>
        <div class="cd-cmd-preview">
          <h3 class="cd-chap-title"></h3>
          <div class="cd-chap-body"></div>
        </div>
      </div>

      <!-- LIVRO -->
      <div class="cd-book" id="cd-book" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cd-book-l">
          <div>
            <div class="cd-book-l-num"></div>
            <div class="cd-book-l-title">Centro de PD&amp;I</div>
            <div class="cd-book-l-toc">
              ${CHAPTERS.map((c,i)=>`<button data-i="${i}"><span class="n">${c.num}</span><span>${c.short}</span></button>`).join('')}
            </div>
          </div>
          <div class="cd-book-fold">PONTTE · YSMART</div>
        </div>
        <div class="cd-book-r">
          <button class="cd-x dark" style="top:24px;right:24px;">✕</button>
          <div class="cd-book-nav">
            <button class="prev" aria-label="Anterior">‹</button>
            <button class="next" aria-label="Próximo">›</button>
          </div>
          <span class="cd-chap-num"></span>
          <h3 class="cd-chap-title"></h3>
          <div class="cd-chap-body"></div>
          <div class="cd-book-fold">— pág. <span class="pg">1</span> de ${CHAPTERS.length} —</div>
        </div>
      </div>
    `;
    document.body.appendChild(host);
  }

  // ── State ────────────────────────────────────────────────────
  const state = { layout: 'acordeao', idx: 0 };

  const INLINE_LAYOUTS = ['tabs-inline', 'acordeao', 'expansao', 'stepper', 'timeline', 'dossie'];
  const MODAL_LAYOUTS  = ['drawer-esq', 'fullscreen', 'deck', 'command', 'livro'];

  function isInline(l) { return INLINE_LAYOUTS.includes(l); }

  function closeAll() {
    document.querySelectorAll('#cd-overlays .cd-drawer-l, #cd-overlays .cd-fs, #cd-overlays .cd-deck, #cd-overlays .cd-cmd, #cd-overlays .cd-book')
      .forEach(el => el.classList.remove('open'));
    const bd = document.getElementById('cd-backdrop');
    if (bd) bd.classList.remove('open');
    unlock();
  }

  function open(layout, startIdx = 0) {
    state.layout = layout;
    state.idx = startIdx;
    if (isInline(layout)) { hydrateInline(layout, startIdx); return; }

    buildAll();
    closeAll();
    const bd = document.getElementById('cd-backdrop');
    bd.classList.add('open');
    lock();

    if (layout === 'drawer-esq') return openDrawerL(startIdx);
    if (layout === 'fullscreen') return openFs(startIdx);
    if (layout === 'deck')       return openDeck(startIdx);
    if (layout === 'command')    return openCmd(startIdx);
    if (layout === 'livro')      return openBook(startIdx);
  }

  // ── Modal layouts ────────────────────────────────────────────
  function openDrawerL(i) {
    const d = document.getElementById('cd-drawer-l');
    d.classList.add('open');
    state.idx = i;
    renderChapter(d.querySelector('.cd-drawer-l-body'), i);
    d.querySelector('.cd-drawer-l-progress .cur').textContent = String(i+1).padStart(2,'0');
    d.querySelector('.prev').disabled = i === 0;
    d.querySelector('.next').disabled = i === CHAPTERS.length-1;
  }

  function openFs(i) {
    const f = document.getElementById('cd-fs');
    f.classList.add('open');
    state.idx = i;
    renderChapter(f.querySelector('.cd-fs-text'), i);
    f.querySelector('.cd-fs-big').textContent = CHAPTERS[i].num;
    f.querySelectorAll('.cd-fs-progress span').forEach((s, k) => {
      s.classList.toggle('active', k === i);
      s.classList.toggle('passed', k < i);
    });
    f.querySelector('.prev').disabled = i === 0;
    f.querySelector('.next').disabled = i === CHAPTERS.length-1;
  }

  function openDeck(i) {
    const d = document.getElementById('cd-deck');
    d.classList.add('open');
    state.idx = i;
    d.querySelectorAll('.cd-deck-card').forEach((c, k) => {
      c.classList.remove('active','past');
      if (k === i)       c.classList.add('active');
      else if (k < i)    c.classList.add('past');
    });
    d.querySelectorAll('.dots span').forEach((s,k)=>s.classList.toggle('active', k===i));
    d.querySelector('.prev').disabled = i === 0;
    d.querySelector('.next').disabled = i === CHAPTERS.length-1;
  }

  function openCmd(i) {
    const c = document.getElementById('cd-cmd');
    c.classList.add('open');
    state.idx = i;
    const inp = c.querySelector('input');
    inp.value = '';
    setTimeout(() => inp.focus(), 100);
    renderCmdList('');
    renderChapter(c.querySelector('.cd-cmd-preview'), i, {
      titleEl: c.querySelector('.cd-cmd-preview .cd-chap-title'),
      bodyEl:  c.querySelector('.cd-cmd-preview .cd-chap-body'),
      numEl:   null
    });
    highlightCmd(i);
  }
  function renderCmdList(q) {
    const c = document.getElementById('cd-cmd');
    const list = c.querySelector('.cd-cmd-list');
    const term = q.trim().toLowerCase();
    list.innerHTML = CHAPTERS
      .map((ch, i) => ({ch, i}))
      .filter(({ch}) =>
        !term ||
        ch.short.toLowerCase().includes(term) ||
        ch.body.toLowerCase().includes(term) ||
        ch.title.toLowerCase().includes(term)
      )
      .map(({ch, i}) => `<li data-i="${i}"><span class="n">${ch.num}</span><span class="t">${ch.short}</span><span class="h">Capítulo</span></li>`)
      .join('');
    list.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => openCmd(+li.dataset.i));
    });
  }
  function highlightCmd(i) {
    const c = document.getElementById('cd-cmd');
    c.querySelectorAll('.cd-cmd-list li').forEach(li => li.classList.toggle('active', +li.dataset.i === i));
  }

  function openBook(i) {
    const b = document.getElementById('cd-book');
    b.classList.add('open');
    state.idx = i;
    renderChapter(b.querySelector('.cd-book-r'), i);
    b.querySelector('.cd-book-l-num').textContent = CHAPTERS[i].num;
    b.querySelector('.cd-book-r .pg').textContent = i+1;
    b.querySelectorAll('.cd-book-l-toc button').forEach(btn =>
      btn.classList.toggle('active', +btn.dataset.i === i));
    b.querySelector('.prev').disabled = i === 0;
    b.querySelector('.next').disabled = i === CHAPTERS.length-1;
  }

  // ── Wire events on overlays (delegated) ─────────────────────
  function wire() {
    if (window.__cdWired) return;
    window.__cdWired = true;

    document.addEventListener('click', (e) => {
      if (e.target.matches('.cd-x') || e.target.closest('.cd-x')) {
        closeAll(); return;
      }
      if (e.target.id === 'cd-backdrop') { closeAll(); return; }

      if (e.target.closest('#cd-drawer-l .prev')) { if (state.idx > 0) openDrawerL(state.idx-1); return; }
      if (e.target.closest('#cd-drawer-l .next')) { if (state.idx < CHAPTERS.length-1) openDrawerL(state.idx+1); return; }

      if (e.target.closest('#cd-fs .prev')) { if (state.idx > 0) openFs(state.idx-1); return; }
      if (e.target.closest('#cd-fs .next')) { if (state.idx < CHAPTERS.length-1) openFs(state.idx+1); return; }

      if (e.target.closest('#cd-deck .prev')) { if (state.idx > 0) openDeck(state.idx-1); return; }
      if (e.target.closest('#cd-deck .next')) { if (state.idx < CHAPTERS.length-1) openDeck(state.idx+1); return; }
      const dot = e.target.closest('#cd-deck .dots span');
      if (dot) { openDeck(+dot.dataset.i); return; }

      const bkBtn = e.target.closest('#cd-book .cd-book-l-toc button');
      if (bkBtn) { openBook(+bkBtn.dataset.i); return; }
      if (e.target.closest('#cd-book .prev')) { if (state.idx > 0) openBook(state.idx-1); return; }
      if (e.target.closest('#cd-book .next')) { if (state.idx < CHAPTERS.length-1) openBook(state.idx+1); return; }
    });

    document.addEventListener('input', (e) => {
      if (e.target.matches('#cd-cmd input')) renderCmdList(e.target.value);
    });

    document.addEventListener('keydown', (e) => {
      if (!document.body.classList.contains('cd-locked')) return;
      if (e.key === 'Escape') { closeAll(); return; }
      if (e.key === 'ArrowRight') advance(1);
      if (e.key === 'ArrowLeft')  advance(-1);
    });
  }

  function advance(dir) {
    const next = Math.max(0, Math.min(CHAPTERS.length-1, state.idx + dir));
    if (next === state.idx) return;
    const map = {
      'drawer-esq': openDrawerL,
      'fullscreen': openFs,
      'deck': openDeck,
      'command': openCmd,
      'livro': openBook
    };
    const fn = map[state.layout];
    if (fn) fn(next);
  }

  // ════════════════════════════════════════════════════════════
  // INLINE LAYOUTS — all live in #cd-inline-host inside the section
  // ════════════════════════════════════════════════════════════
  function getHost() {
    return document.getElementById('cd-inline-host');
  }

  function hydrateInline(layout, idx = 0) {
    const host = getHost();
    if (!host) return;
    host.classList.add('show');
    host.dataset.layout = layout;
    state.idx = idx;
    if (layout === 'tabs-inline') renderTabsInline(host, idx);
    if (layout === 'acordeao')    renderAcordeao(host, idx);
    if (layout === 'expansao')    renderExpansao(host);
    if (layout === 'stepper')     renderStepper(host, idx);
    if (layout === 'timeline')    renderTimeline(host);
    if (layout === 'dossie')      renderDossie(host);
  }

  // ── tabs-inline (already had it) ────────────────────────────
  function renderTabsInline(host, activeI) {
    host.className = 'cd-inline-tabs show';
    host.innerHTML = `
      <div class="cd-it-head">
        ${CHAPTERS.map((c,i)=>`<button data-i="${i}" class="${i===activeI?'active':''}"><span class="n">${c.num}</span><span>${c.short}</span></button>`).join('')}
      </div>
      <div class="cd-it-body">
        <span class="cd-chap-num"></span>
        <h3 class="cd-chap-title"></h3>
        <div class="cd-chap-body"></div>
      </div>
    `;
    renderChapter(host.querySelector('.cd-it-body'), activeI);
    host.querySelectorAll('.cd-it-head button').forEach(b => {
      b.addEventListener('click', () => renderTabsInline(host, +b.dataset.i));
    });
  }

  // ── acordeao (classic vertical accordion) ───────────────────
  function renderAcordeao(host, openI) {
    host.className = 'cd-acc show';
    host.innerHTML = CHAPTERS.map((c, i) => `
      <div class="cd-acc-row ${i===openI ? 'open' : ''}" data-i="${i}">
        <button class="cd-acc-head" aria-expanded="${i===openI}">
          <span class="cd-acc-n">${c.num}</span>
          <span class="cd-acc-t">${c.short}</span>
          <span class="cd-acc-caret">+</span>
        </button>
        <div class="cd-acc-body">
          <div class="cd-acc-body-inner">
            <h4 class="cd-chap-title">${c.title}</h4>
            <div class="cd-chap-body">${c.body}</div>
          </div>
        </div>
      </div>
    `).join('');
    host.querySelectorAll('.cd-acc-head').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const row = btn.parentElement;
        const wasOpen = row.classList.contains('open');
        host.querySelectorAll('.cd-acc-row').forEach(r => {
          r.classList.remove('open');
          r.querySelector('.cd-acc-head').setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          row.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── expansao (cards individuais, múltiplos podem ficar abertos) ────
  function renderExpansao(host) {
    host.className = 'cd-exp show';
    const COLORS = ['#5a7a1e', '#004f9f', '#F76C00', '#5a7a1e', '#004f9f'];
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

  // ── stepper (numbered steps + content panel, in-place) ──────
  function renderStepper(host, activeI) {
    host.className = 'cd-step show';
    host.innerHTML = `
      <div class="cd-step-rail">
        ${CHAPTERS.map((c, i) => `
          <button class="cd-step-node ${i===activeI?'active':''} ${i<activeI?'done':''}" data-i="${i}">
            <span class="cd-step-dot">${i<activeI ? '✓' : c.num}</span>
            <span class="cd-step-lbl">${c.short}</span>
          </button>
          ${i < CHAPTERS.length-1 ? `<div class="cd-step-line ${i<activeI?'done':''}"></div>` : ''}
        `).join('')}
      </div>
      <div class="cd-step-body">
        <div class="cd-step-meta">
          <span>Etapa <b>${String(activeI+1).padStart(2,'0')}</b> de ${String(CHAPTERS.length).padStart(2,'0')}</span>
          <span class="cd-step-bar"><span style="width:${((activeI+1)/CHAPTERS.length*100).toFixed(0)}%"></span></span>
        </div>
        <h3 class="cd-chap-title">${CHAPTERS[activeI].title}</h3>
        <div class="cd-chap-body">${CHAPTERS[activeI].body}</div>
        <div class="cd-step-nav">
          <button class="prev" ${activeI===0?'disabled':''}>← Anterior</button>
          <button class="next" ${activeI===CHAPTERS.length-1?'disabled':''}>${activeI===CHAPTERS.length-1?'Concluído':'Próximo →'}</button>
        </div>
      </div>
    `;
    host.querySelectorAll('.cd-step-node').forEach(n => {
      n.addEventListener('click', () => renderStepper(host, +n.dataset.i));
    });
    host.querySelector('.prev').addEventListener('click', () => {
      if (activeI > 0) renderStepper(host, activeI - 1);
    });
    host.querySelector('.next').addEventListener('click', () => {
      if (activeI < CHAPTERS.length-1) renderStepper(host, activeI + 1);
    });
  }

  // ── timeline (vertical numbered timeline, all chapters visible) ──
  function renderTimeline(host) {
    host.className = 'cd-tl show';
    host.innerHTML = `
      <div class="cd-tl-rail"></div>
      ${CHAPTERS.map((c, i) => `
        <div class="cd-tl-row" data-i="${i}">
          <div class="cd-tl-marker">
            <span class="cd-tl-n">${c.num}</span>
          </div>
          <div class="cd-tl-content">
            <div class="cd-tl-eyebrow">${c.short}</div>
            <h4 class="cd-chap-title">${c.title}</h4>
            <div class="cd-chap-body">${c.body}</div>
          </div>
        </div>
      `).join('')}
    `;
  }

  // ── dossie (editorial document, all chapters as a continuous read) ──
  function renderDossie(host) {
    host.className = 'cd-dos show';
    host.innerHTML = `
      <header class="cd-dos-head">
        <div class="cd-dos-eyebrow">Documento · Centro de PD&amp;I</div>
        <h3 class="cd-dos-title">Detalhamento completo<br><em>da implantação do PONTTE.</em></h3>
        <div class="cd-dos-meta">
          <span>YSMART · PONTTE</span>
          <span>${CHAPTERS.length} seções</span>
          <span>Niterói · 2026</span>
        </div>
      </header>
      ${CHAPTERS.map((c, i) => `
        <article class="cd-dos-sec" data-i="${i}">
          <div class="cd-dos-sec-num">${c.num}</div>
          <div class="cd-dos-sec-body">
            <div class="cd-dos-sec-eyebrow">${c.short}</div>
            <h4 class="cd-chap-title">${c.title}</h4>
            <div class="cd-chap-body">${c.body}</div>
          </div>
        </article>
      `).join('')}
      <footer class="cd-dos-foot">
        — fim do documento — Resolução CNDI nº 01/2023 · Nova Indústria Brasil —
      </footer>
    `;
  }

  // ── Reset before switching ──────────────────────────────────
  function reset() {
    closeAll();
    const host = getHost();
    if (host) {
      host.classList.remove('show');
      host.innerHTML = '';
      host.removeAttribute('data-layout');
      host.className = '';
    }
  }

  // ── Public API ───────────────────────────────────────────────
  window.PontteCentro = {
    open,
    close: closeAll,
    reset,
    setLayout(layout) {
      reset();
      state.layout = layout;
      if (isInline(layout)) hydrateInline(layout, 0);
    },
    chapters: CHAPTERS,
    isInline,
    getLayout: () => state.layout
  };

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { buildAll(); wire(); });
  } else {
    buildAll(); wire();
  }
})();
