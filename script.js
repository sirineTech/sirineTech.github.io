/* ==========================================================
   Sirine Bensalah — Interactive CV
   Edit CONFIG below to add links (GitHub, project URLs, certificate images).
   Anything left empty ('') is simply not displayed — nothing is invented.
   ========================================================== */

const CONFIG = {
  email:    'sirine.bensalah@enicar.ucar.tn',
  linkedin: 'https://www.linkedin.com/in/sirine-bensalah',
  github:   '',                                   // ← add your GitHub URL to show the GitHub buttons
  credly:   'https://credly.com/users/bensalah-sirine',
  cv:       'CV_Sirine_Bensalah.pdf',
  phone:    '+216 53 266 267',
  showPhone: true                                  // ← set to false to hide the phone number
};

/* ---------------- DATA ---------------- */

const EXPERIENCE = [
  {
    date: 'Feb 2026 – Jun 2026', title: 'MILCRYPT-AI — Secure AI Communication System', org: 'Sotetel',
    kind: 'Final-year engineering project (PFE)', tag: 'Très Bien',
    points: [
      'Designed a secure communication system combining AI, post-quantum cryptography and multi-factor biometric authentication.',
      'Red Team campaign: 12 attack vectors, 910 attempts, 100% blocked; traffic analysed with Wireshark.',
      'Wrote and presented a detailed technical report to a jury.'
    ],
    tech: ['Kyber-1024', 'Dilithium3', 'Biometric MFA', 'AI', 'Wireshark']
  },
  {
    date: 'Jun 2025 – Aug 2025', title: 'Smart IT Operations & ITSM Platform', org: 'BIZ Expérience',
    kind: 'Full-Stack Engineer — summer internship',
    points: [
      'Built an ITSM/ITOM platform: incidents, service requests, SLAs and configuration items (CMDB).',
      'Monitored Linux, Windows and Kubernetes environments; automated ticket creation from alerts.',
      'Developed REST & SOAP APIs, containerised with Docker, deployed on Kubernetes; ran incident diagnosis scenarios.'
    ],
    tech: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Kubernetes', 'REST', 'SOAP']
  },
  {
    date: 'Feb 2025 – May 2025', title: 'AI for Voice Signal Analysis — Emotion Recognition', org: 'Biware',
    kind: 'R&D Engineer — end-of-year project',
    points: [
      'Emotion recognition for human–vehicle interaction.',
      'Set up the data processing environment and trained a CNN: raw signal → feature extraction → classification.'
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Signal processing']
  },
  {
    date: 'Oct 2024 – Feb 2025', title: 'Electronic Board Diagnostics & Security', org: 'MPSI-Tunisia',
    kind: 'Engineer — professional internship',
    points: ['Diagnosed faults on electronic boards to reduce downtime; wrote detailed technical reports for traceability.'],
    tech: ['Diagnostics', 'Electronics', 'Technical reports']
  },
  {
    date: 'Aug 2024 – Sep 2024', title: 'MES — Manufacturing Execution System', org: 'OneTech Group',
    kind: 'MES Engineer — summer internship',
    points: ['Production monitoring and traceability reporting in an industrial environment.'],
    tech: ['MES', 'Traceability', 'Industry']
  },
  {
    date: 'Jan 2022 – May 2022', title: 'Secure IoT Lighting System', org: 'Fixtronix',
    kind: 'Engineer — bachelor’s final project',
    points: ['Feasibility study, requirements specification and design of a connected smart lighting system.'],
    tech: ['ESP32', 'Sensors', 'IoT platform']
  }
];

const SKILLS = [
  ['AI / Data',            ['Python','TensorFlow','Keras','scikit-learn','Pandas','NLP','Deep Learning (CNN)','Machine Learning','Anomaly detection','Recommendation systems','Predictive maintenance','Signal processing']],
  ['Web / Software',       ['Java','Spring Boot','Angular','React','React Native','Node.js','Express','PHP','Laravel','FastAPI','REST & SOAP APIs','Microservices','C# / ASP.NET Core','PyQt']],
  ['Databases',            ['PostgreSQL','MySQL','SQLite','MongoDB','SQL Server']],
  ['Embedded / IoT',       ['STM32','ESP32','Raspberry Pi','Zephyr RTOS','FreeRTOS','Embedded Linux','MQTT','CAN','Modbus','RS485','Ethernet','FPGA','VHDL','ModelSim / Questa']],
  ['Network / Security',   ['LAN','WLAN','VLAN','TCP/IP','IPv4','IPv6','DHCP / DNS','VPN','Cisco IOS','Wireshark','Post-quantum crypto (Kyber, Dilithium)','Multi-factor auth','Penetration testing (Red Team)']],
  ['DevOps & Monitoring',  ['Docker','Kubernetes','Git','GitHub','CI/CD (GitHub Actions)','Prometheus','Grafana','Alertmanager','ITSM / ITOM','SLA','CMDB','Unit & integration tests']],
  ['Systems',              ['Linux (Ubuntu, Kali)','Windows Server','Microsoft 365','Entra ID','Exchange Online','SharePoint','Teams','Intune']],
  ['Programming & Methods',['Java','JavaScript','Python','PHP','C','C++','C#','VHDL','Agile / Scrum','Technical documentation']]
];

/* image: '' → set to a real certificate image path to open it in a modal.
   url:   '' → set to a real credential URL. Otherwise the Credly profile link is used. */
const CERTS = [
  { name: 'Networking Basics',                              issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Networking Devices and Initial Configuration',   issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Network Addressing and Basic Troubleshooting',   issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Network Support and Security',                   issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Operating Systems Basics',                       issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Introduction to Internet of Things (IoT)',       issuer: 'Cisco Networking Academy', date: '8 Oct. 2026', verified: true, url: '', image: '' },
  { name: 'Embedded C — Langage C pour les systèmes embarqués', issuer: 'Centre de l’Information CSF', date: '', verified: false, url: '', image: '', wide: true }
];

/* url / github: '' → button not displayed. */
const PROJECTS = [
  { name: 'Recruitini', cat: 'sw', tag: 'AI / NLP recruitment platform',
    desc: 'Candidate and job-offer management, CV upload and automatic analysis, CV–job matching, candidate scoring, HR dashboard and statistics. Agile/Scrum.',
    tech: ['Spring Boot','Angular','PostgreSQL','Python / NLP','scikit-learn','Docker'], url: '', github: '' },
  { name: 'ECommerce', cat: 'sw', tag: 'Web + mobile intelligent e-commerce',
    desc: 'Catalog, cart, orders, payment, stock management, personalised recommendations, customer behaviour analysis, admin dashboard, notifications.',
    tech: ['Node.js','Express','React','React Native','MySQL','MongoDB','Docker'], url: '', github: '' },
  { name: 'SmartStock', cat: 'sw', tag: 'Data + DevOps + backend architecture',
    desc: 'Products, suppliers and stock flows, order tracking, stock-out alerts, demand forecasting, analytics dashboards and anomaly detection. REST API + microservices.',
    tech: ['Spring Boot','Angular','PostgreSQL','MongoDB','Pandas','scikit-learn','Docker'], url: '', github: '' },
  { name: 'Smart Industrial IoT Gateway', cat: 'emb', tag: 'Embedded · IoT',
    desc: 'Sensor acquisition on STM32, CAN/MQTT link to a Linux gateway, supervision dashboard, anomaly detection, watchdog and error handling.',
    tech: ['STM32','Zephyr RTOS','Raspberry Pi','Linux','MQTT','CAN'], url: '', github: '' },
  { name: 'Smart Energy Monitoring System', cat: 'emb', tag: 'Embedded · IoT',
    desc: 'Voltage/current acquisition, power and energy computation, MQTT to a Linux gateway, real-time dashboard, consumption anomaly detection.',
    tech: ['STM32','Zephyr RTOS','MQTT','Embedded Linux'], url: '', github: '' },
  { name: 'Predictive Maintenance', cat: 'emb', tag: 'Motors & servomotors · AI + IoT',
    desc: 'IoT monitoring kit (temperature, vibration, current, voltage, speed) over MQTT; ML pipeline classifying Normal / Warning / Fault with inspection alerts.',
    tech: ['ESP32','STM32','MQTT','FastAPI','PostgreSQL','Grafana','scikit-learn'], url: '', github: '' },
  { name: 'Industrial Diagnostic Platform', cat: 'emb', tag: 'Diagnostics · maintenance · traceability',
    desc: 'Repair-cycle tracking from reception to delivery with a unique QR code per equipment; test bench → API → database → automatic report.',
    tech: ['API','Database','Dashboard','QR code','MQTT','Modbus'], url: '', github: '' },
  { name: 'Smart Diagnostic & Test Bench', cat: 'emb', tag: 'Drives & servo-drives',
    desc: 'Post-repair test bench measuring voltage, current, temperature and vibration, with anomaly detection and a PC app generating PDF test reports.',
    tech: ['STM32','ESP32','RS485 / Modbus','Python','PyQt','SQLite'], url: '', github: '' },
  { name: 'RISC Microprocessor on FPGA', cat: 'emb', tag: '8/16-bit processor design',
    desc: 'ALU, register file, program counter, control unit, ROM/RAM and a custom instruction set; fetch–decode–execute–memory–write back validated with testbenches.',
    tech: ['VHDL','ModelSim / Questa','Xilinx / AMD','Intel FPGA'], url: '', github: '' },
  { name: 'Mini ERP Industriel', cat: 'sw', tag: 'Maintenance & equipment management',
    desc: 'Industrial ERP managing equipment, interventions, work orders, spare parts and maintenance KPIs.',
    tech: ['C#','.NET','ASP.NET Core','SQL Server','React','REST API'], url: '', github: '' }
];

/* ---------------- HELPERS ---------------- */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = n => String(n).padStart(2, '0');
const chips = list => `<ul class="chips">${list.map(t => `<li>${t}</li>`).join('')}</ul>`;

/* ---------------- LINKS ---------------- */

function wireLinks() {
  const map = {
    email:    `mailto:${CONFIG.email}`,
    linkedin: CONFIG.linkedin,
    github:   CONFIG.github,
    credly:   CONFIG.credly,
    cv:       CONFIG.cv,
    phone:    CONFIG.showPhone && CONFIG.phone ? `tel:${CONFIG.phone.replace(/\s/g, '')}` : ''
  };
  $$('[data-link]').forEach(el => {
    const href = map[el.dataset.link];
    if (!href) { el.hidden = true; return; }
    el.href = href;
  });
  $$('[data-text]').forEach(el => {
    const t = { email: CONFIG.email, github: (CONFIG.github || '').replace(/^https?:\/\/(www\.)?/, ''), phone: CONFIG.phone }[el.dataset.text];
    el.textContent = t || '';
  });
  $$('[data-needs]').forEach(li => { li.hidden = !$('a:not([hidden])', li) || !$('a', li).getAttribute('href') || $('a', li).getAttribute('href') === '#'; });
}

/* ---------------- RENDER ---------------- */

function renderExperience() {
  $('#experienceList').innerHTML = EXPERIENCE.map(e => `
    <li class="tl reveal">
      <span class="tl__year">${e.date.toUpperCase()}</span>
      <div class="tl__body">
        <h3>${e.title}${e.tag ? `<span class="tl__tag">${e.tag}</span>` : ''}</h3>
        <p class="tl__org">${e.org} <span style="font-weight:500;color:var(--muted)">· ${e.kind}</span></p>
        <ul class="bul">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
        ${chips(e.tech)}
      </div>
    </li>`).join('');
}

function renderSkills() {
  $('#skillsList').innerHTML = SKILLS.map(([cat, items]) => `
    <div class="skill reveal"><h3>${cat}</h3>${chips(items)}</div>`).join('');
}

function renderCerts() {
  $('#certList').innerHTML = CERTS.map((c, i) => {
    const href = c.url || (c.verified ? CONFIG.credly : '');
    let action = '';
    if (c.image)      action = `<button class="cert__btn" type="button" data-cert-img="${i}">VIEW CREDENTIAL ↗</button>`;
    else if (href)    action = `<a class="cert__btn" href="${href}" target="_blank" rel="noopener">${c.url ? 'VIEW CREDENTIAL ↗' : 'VIEW ON CREDLY ↗'}</a>`;
    return `
    <article class="cert reveal ${c.wide ? 'cert--wide' : ''}">
      <span class="cert__k">CERTIFICATION</span>
      <h3>${c.name}</h3>
      <div class="cert__issuer">${c.issuer}</div>
      ${c.date ? `<div class="cert__date">${c.date}</div>` : ''}
      <div class="cert__ok ${c.verified ? '' : 'cert__ok--none'}">${c.verified ? '✓ VERIFIED' : 'COURSE CERTIFICATION'}</div>
      ${action}
    </article>`;
  }).join('');

  const modal = $('#certModal'), img = $('#certModalImg');
  $$('[data-cert-img]').forEach(b => b.addEventListener('click', () => {
    const c = CERTS[b.dataset.certImg];
    img.src = c.image; img.alt = c.name;
    modal.showModal();
  }));
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
}

function renderProjects() {
  const filters = [['all', 'All'], ['sw', 'AI & Software'], ['emb', 'Embedded & IoT']];
  const fbox = $('#projectFilters');
  fbox.innerHTML = filters.map(([k, l], i) => `<button type="button" data-f="${k}" aria-pressed="${i === 0}">${l}</button>`).join('');

  const list = $('#projectList');
  list.innerHTML = PROJECTS.map(p => `
    <article class="proj" data-cat="${p.cat}">
      <span class="proj__k">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="proj__t">TECHNOLOGIES</span>
      ${chips(p.tech)}
      ${(p.url || p.github) ? `<div class="proj__links">
        ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">VIEW PROJECT</a>` : ''}
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GITHUB</a>` : ''}
      </div>` : ''}
    </article>`).join('');

  fbox.addEventListener('click', e => {
    const b = e.target.closest('button[data-f]'); if (!b) return;
    $$('button', fbox).forEach(x => x.setAttribute('aria-pressed', x === b));
    $$('.proj', list).forEach((c, i) => {
      const show = b.dataset.f === 'all' || c.dataset.cat === b.dataset.f;
      c.hidden = !show;
      if (show) { c.style.animationDelay = `${i * 40}ms`; c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }
    });
  });
}

function renderStats() {
  const v = { experience: EXPERIENCE.length, projects: PROJECTS.length, certs: CERTS.length };
  $$('[data-count]').forEach(el => el.textContent = v[el.dataset.count]);
}

/* ---------------- NAVIGATION ---------------- */

let pages = [], current = 0, busy = false, pending = null;
const ANIM_MS = 520;
const SLUGS = ['cover', 'profile', 'education', 'experience', 'skills', 'certifications', 'projects', 'featured', 'contact'];

function buildMenu() {
  $('#menuList').innerHTML = pages.slice(1).map((p, i) => `
    <li><button type="button" data-goto="${i + 1}"><small>${pad(i + 1)}</small><span>${p.dataset.title}</span></button></li>`).join('');
}

function updateUI() {
  const total = pages.length;
  document.body.dataset.page = SLUGS[current];
  $('#counter').textContent = `PAGE ${pad(current + 1)} / ${pad(total)}`;
  $('#progressFill').style.width = `${(current / (total - 1)) * 100}%`;
  $('#prevBtn').disabled = current === 0;
  $('#nextBtn').disabled = current === total - 1;
  $$('#menuList button').forEach(b => {
    if (+b.dataset.goto === current) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  $('#announcer').textContent = `${pages[current].dataset.title}, page ${current + 1} of ${total}`;
  document.title = current === 0 ? 'Sirine Bensalah — Interactive CV' : `${pages[current].dataset.title} — Sirine Bensalah`;
  try { history.replaceState(null, '', current === 0 ? location.pathname + location.search : `#${SLUGS[current]}`); } catch (e) {}
}

function navigateToPage(next) {
  if (next < 0 || next >= pages.length || next === current) return;
  if (busy) { pending = next; return; }
  busy = true;
  const dir = next > current ? 'fwd' : 'back';
  const from = pages[current], to = pages[next];
  const inner = $('.page__inner', to); if (inner) inner.scrollTop = 0;
  from.classList.add(`out-${dir}`);
  to.classList.add('is-active', `in-${dir}`);
  current = next;
  updateUI();
  setTimeout(() => {
    from.classList.remove('is-active', 'out-fwd', 'out-back');
    to.classList.remove('in-fwd', 'in-back');
    busy = false;
    if (pending !== null) { const p = pending; pending = null; navigateToPage(p); }
  }, ANIM_MS);
}
const nextPage     = () => navigateToPage(current + 1);
const previousPage = () => navigateToPage(current - 1);

/* ---------------- MENU ---------------- */

const menu = $('#menu'), overlay = $('#overlay'), menuBtn = $('#menuBtn');
const isMenuOpen = () => menu.classList.contains('is-open');

function openMenu() {
  menu.classList.add('is-open'); overlay.classList.add('is-open');
  menu.removeAttribute('inert'); menu.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
  menuBtn.setAttribute('aria-expanded', 'true'); menuBtn.setAttribute('aria-label', 'Close menu');
  setTimeout(() => { const b = $('#menuList [aria-current="page"]') || $('#menuList button'); b && b.focus({ preventScroll: true }); }, 60);
}
function closeMenu(returnFocus = true) {
  if (!isMenuOpen()) return;
  menu.classList.remove('is-open'); overlay.classList.remove('is-open');
  menu.setAttribute('inert', ''); menu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu');
  if (returnFocus) menuBtn.focus({ preventScroll: true });
}

/* ---------------- INIT ---------------- */

function init() {
  pages = $$('.page');
  wireLinks(); renderExperience(); renderSkills(); renderCerts(); renderProjects(); renderStats();
  wireLinks(); // second pass for rendered anchors
  buildMenu();

  // stagger index for reveal animations
  pages.forEach(p => $$('.reveal', p).forEach((el, i) => el.style.setProperty('--i', Math.min(i, 12))));

  // open page from hash (e.g. #projects); QR code → no hash → cover
  const h = location.hash.replace('#', '');
  const start = SLUGS.indexOf(h);
  if (start > 0) {
    pages[0].classList.remove('is-active'); pages[start].classList.add('is-active'); current = start;
  }
  updateUI();

  // clicks
  menuBtn.addEventListener('click', () => isMenuOpen() ? closeMenu() : openMenu());
  overlay.addEventListener('click', () => closeMenu());
  $('#prevBtn').addEventListener('click', previousPage);
  $('#nextBtn').addEventListener('click', nextPage);
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-goto]'); if (!g) return;
    const n = +g.dataset.goto;
    if (isMenuOpen()) { closeMenu(false); menuBtn.blur(); }
    navigateToPage(n);
  });
  $$('.menu__foot a').forEach(a => a.addEventListener('click', () => closeMenu(false)));

  // keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (isMenuOpen() || $('#certModal').open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') nextPage();
    else if (e.key === 'ArrowLeft') previousPage();
  });

  // swipe
  let sx = 0, sy = 0, st = 0;
  const sheet = $('#sheet');
  sheet.addEventListener('touchstart', e => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; st = Date.now(); }, { passive: true });
  sheet.addEventListener('touchend', e => {
    if (isMenuOpen()) return;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6 && Date.now() - st < 700) dx < 0 ? nextPage() : previousPage();
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', init);
