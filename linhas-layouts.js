/* Linhas de pesquisa — acordeão horizontal */
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
      icone: ICONS.seg,
      desc: `Foco na <b>identificação de vulnerabilidades</b> nas arquiteturas e protocolos utilizados em sistemas de automação do setor elétrico. Serão investigadas técnicas de <b>modelagem de ameaças</b>, defesa em profundidade e respostas coordenadas a ataques. Serão utilizados casos reais do sistema elétrico brasileiro e internacional e desenvolvidas soluções aplicáveis em plantas piloto, ambientes reais e eventualmente regulatórios. Entre as tecnologias destacam-se o uso de <b>gêmeos digitais</b> na detecção de ataques e criação de ambientes seguros, bem como o uso de <b>metaverso</b> na formação de profissionais de alta qualificação em cibersegurança para infraestruturas críticas.`
    },
    {
      num: '02',
      cor: '#5a7a1e',
      titulo: 'Inteligência Artificial Aplicada',
      icone: ICONS.ia,
      desc: `Voltada para <b>análise, predição e otimização</b> de sistemas de potência e ativos de infraestrutura crítica. Serão aplicadas técnicas como <b>aprendizado federado, IA explicável, aprendizado profundo e IA generativa</b>, integradas a ferramentas de apoio à decisão — sistemas de detecção de anomalias em tempo real, modelos preditivos para manutenção e interfaces explicativas para operadores. Uma vertente específica tratará da <b>previsão de impactos de mudanças climáticas</b> e eventos severos sobre linhas de transmissão, promovendo ações adaptativas em tempo real.`
    },
    {
      num: '03',
      cor: '#F76C00',
      titulo: 'Big Data e Open Data Setorial',
      icone: ICONS.bd,
      desc: `Ênfase na implementação de um <b>data lake interoperável</b> voltado ao setor elétrico. Serão desenvolvidas arquiteturas para coleta automatizada de dados operacionais através de protocolos padrão como a <b>norma IEC 61850</b>, procedimentos de <b>anonimização conforme a LGPD</b>, modelagem semântica com uso de ontologias setoriais e mecanismos de governança baseados em metadados padronizados. A estrutura viabilizará a disponibilização pública e segura de dados técnicos, <b>em colaboração com o ONS</b>, permitindo o uso por universidades, ICTs e empresas em ambientes de desenvolvimento e validação de algoritmos. Infraestrutura de <b>dados abertos para experimentação científica</b> e inovação aplicada, com governança distribuída.`
    },
    {
      num: '04',
      cor: '#004f9f',
      titulo: 'Monitoramento e Automação',
      icone: ICONS.mon,
      desc: `Foco em <b>redes de comunicação de missão crítica</b> e tolerância a falhas em tempo real. Um projeto específico é o aprimoramento de soluções para o <b>monitoramento de subestações digitais</b> que atendam aos requisitos dos procedimentos de rede do ONS. Outra linha aborda o <b>monitoramento ambiental, estrutural e elétrico</b>, com aplicações voltadas à detecção precoce de anomalias, resposta a eventos extremos e operação segura de ativos sob estresse climático.`
    },
    {
      num: '05',
      cor: '#5a7a1e',
      titulo: 'Subestações Digitais',
      icone: ICONS.sub,
      desc: `Foco no <b>desenvolvimento de soluções, testes, certificações e homologações</b> voltadas a esse ambiente. Serão desenvolvidas ferramentas para simulação de cenários operacionais, execução de testes automatizados, <b>verificação de interoperabilidade entre equipamentos de diferentes fabricantes</b> e validação de arquiteturas de redes de automação específicas para subestações digitais. Essa linha visa contribuir diretamente para o aprimoramento, padronização e consolidação do uso da <b>norma IEC 61850 no Brasil</b>, com potencial de induzir normatizações técnicas. Estruturação do Centro como <b>unidade de referência em certificação e homologação</b>, promovendo maior confiabilidade, conformidade regulatória e independência tecnológica para o setor elétrico nacional.`
    }
  ];

  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function render(target) {
    if (!target) return;
    target.setAttribute('data-layout', 'acordeon-h');
    target.innerHTML = LINHAS.map((l, i) => `
      <div class="lin-item" style="--lc:${l.cor}" data-idx="${i}">
        <span class="lin-num">${l.num} · LINHA</span>
        <span class="lin-icon-h">${l.icone}</span>
        <h3 class="lin-title-h">${l.titulo}</h3>
        <p class="lin-desc-h">${l.desc}</p>
      </div>
    `).join('');
    const items = $$('.lin-item', target);
    items.forEach(it => it.addEventListener('click', () => {
      items.forEach(x => x.classList.remove('open'));
      it.classList.add('open');
    }));
    items[0].classList.add('open');
  }

  window.PontteLinhas = { render };

  function init() {
    render(document.getElementById('linhas-container'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
