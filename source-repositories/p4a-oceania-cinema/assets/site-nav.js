/*
 * P4A Oceania site chrome.
 * One data file describes every public room. The header, full-screen index,
 * breadcrumbs and footer explore-columns are generated from it, so new pages
 * only need an entry here to appear everywhere. Progressive enhancement:
 * without JS the static header links and the site-map page cover the site.
 */
(() => {
  document.documentElement.classList.add('js');

  const styleLink = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  const P = styleLink ? styleLink.getAttribute('href').split('styles.css')[0] : './';

  const SECTIONS = [
    {
      id: 'start',
      num: '01',
      label: 'Start here',
      blurb: 'The doorway, the participant layer and the maps that keep your bearings.',
      links: [
        { href: 'index.html', title: 'Home', note: 'The blue-purple doorway to the whole lab.' },
        { href: 'pages/gen-xyza.html', title: 'Gen XYZA', note: 'The participant layer: operators, not audience.' },
        { href: 'pages/progression.html', title: 'Progression', note: 'Minjerribah seed to Australian ripple to Oceania horizon.' },
        { href: 'pages/site-map.html', title: 'Site map', note: 'Every public room, one link map.' }
      ]
    },
    {
      id: 'region',
      num: '02',
      label: 'The region',
      blurb: 'Fifty-plus places, four source frames, shared currents — with receipts kept close to the map.',
      links: [
        { href: 'pages/oceania-map.html', title: 'Oceania atlas', note: 'Sourced political map, hover zones, atlas cards and follow-ups.' },
        { href: 'pages/pulse.html', title: 'Oceania pulse', note: 'Live election clocks and what makes every system different.' },
        { href: 'pages/shared-currents.html', title: 'Shared currents', note: 'The issues the whole ocean shares, framed as translation questions.' }
      ]
    },
    {
      id: 'tools',
      num: '03',
      label: 'The tools',
      blurb: 'The operating layers a self-sovereign civic region would actually need.',
      links: [
        { href: 'pages/c-hours.html', title: 'C-Hours', note: 'Proof-of-contribution receipts for care, repair and readiness.' },
        { href: 'pages/compute.html', title: 'Civic compute', note: 'Personal tanks, neighbourhood dams, library reservoirs.' },
        { href: 'pages/compliance.html', title: 'Trust stack', note: 'Receipts, ledgers, source trails, consent and correction paths.' }
      ]
    },
    {
      id: 'surge',
      num: '04',
      label: 'The surge',
      blurb: 'The 2028–2032 horizon and the archive that feeds it.',
      links: [
        { href: 'pages/surge.html', title: 'Oceania surge', note: 'Brisbane 2032 as the visible horizon for the moonshot shelf.' },
        { href: 'pages/source-notes.html', title: 'Archive engine', note: 'The source packet as a map of build lanes.' }
      ]
    }
  ];

  const EXTERNAL = [
    { href: 'https://auraofintelligence.github.io/p4a-xyz-cinema/', title: 'Open the P4A site' },
    { href: 'https://github.com/auraofintelligence/p4a-oceania-cinema', title: 'Fork on GitHub' }
  ];

  /* Normalise: strip /index.html and .html so clean URLs match too. */
  const norm = (href) => new URL(href, location.href).pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  const here = norm(location.href);
  const isCurrent = (href) => norm(P + href) === here;

  /* ---------- Full-screen index ---------- */
  const sectionMarkup = (section) => `
    <section class="index-section" data-index-section>
      <header><span>${section.num}</span><h2>${section.label}</h2><p>${section.blurb}</p></header>
      <ul class="index-links">${section.links.map((link) => `
        <li data-index-item>
          <a href="${P}${link.href}"${isCurrent(link.href) ? ' aria-current="page"' : ''}>
            <strong>${link.title}</strong>
            <em>${link.note}</em>
          </a>
        </li>`).join('')}
      </ul>
    </section>`;

  const overlay = document.createElement('div');
  overlay.className = 'site-index';
  overlay.id = 'site-index';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Site index');
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="index-shell">
      <div class="index-top">
        <p class="index-kicker">P4O / every public room</p>
        <label class="index-search">
          <span class="sr-only">Filter the index</span>
          <input type="search" placeholder="Type to filter the rooms…" data-index-search autocomplete="off">
        </label>
        <button class="index-close" type="button" data-menu-close aria-label="Close index">Close</button>
      </div>
      <p class="index-count" data-index-count aria-live="polite"></p>
      <div class="index-grid">${SECTIONS.map(sectionMarkup).join('')}</div>
      <footer class="index-foot">
        ${EXTERNAL.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.title}</a>`).join('')}
      </footer>
    </div>`;
  document.body.appendChild(overlay);

  const toggles = Array.from(document.querySelectorAll('[data-menu-toggle]'));
  const closeBtn = overlay.querySelector('[data-menu-close]');
  const searchInput = overlay.querySelector('[data-index-search]');
  const countLabel = overlay.querySelector('[data-index-count]');
  const items = Array.from(overlay.querySelectorAll('[data-index-item]'));
  const sections = Array.from(overlay.querySelectorAll('[data-index-section]'));
  let lastFocus = null;

  const setCount = (visible) => {
    countLabel.textContent = visible === items.length
      ? `${items.length} rooms in the index`
      : `${visible} of ${items.length} rooms match`;
  };
  setCount(items.length);

  searchInput.addEventListener('input', () => {
    const q = (searchInput.value || '').trim().toLowerCase();
    let visible = 0;
    items.forEach((item) => {
      const match = !q || item.textContent.toLowerCase().includes(q);
      item.hidden = !match;
      if (match) visible += 1;
    });
    sections.forEach((section) => {
      const any = Array.from(section.querySelectorAll('[data-index-item]')).some((i) => !i.hidden);
      section.classList.toggle('is-empty', !any);
    });
    setCount(visible);
  });

  const setExpanded = (value) => toggles.forEach((t) => t.setAttribute('aria-expanded', String(value)));
  const openIndex = () => {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('index-open');
    setExpanded(true);
    requestAnimationFrame(() => {
      overlay.classList.add('is-open');
      searchInput.focus({ preventScroll: true });
    });
  };
  const closeIndex = () => {
    overlay.classList.remove('is-open');
    document.body.classList.remove('index-open');
    setExpanded(false);
    const done = () => { overlay.hidden = true; };
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? done() : setTimeout(done, 320);
    if (lastFocus?.focus) lastFocus.focus({ preventScroll: true });
  };

  toggles.forEach((t) => t.addEventListener('click', () => (overlay.hidden ? openIndex() : closeIndex())));
  closeBtn.addEventListener('click', closeIndex);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeIndex();
  });
  document.addEventListener('keydown', (event) => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') { closeIndex(); return; }
    if (event.key !== 'Tab') return;
    const focusables = Array.from(overlay.querySelectorAll('a, button, input')).filter((el) => !el.hidden && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  /* ---------- Header state + scroll progress ---------- */
  const header = document.querySelector('.site-header');
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<i></i>';
  document.body.appendChild(progress);
  const progressBar = progress.firstElementChild;

  let ticking = false;
  const syncScroll = () => {
    ticking = false;
    const top = window.scrollY;
    header?.classList.toggle('is-condensed', top > 24);
    const depth = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${depth > 0 ? Math.min(1, top / depth) : 0})`;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(syncScroll); }
  }, { passive: true });
  syncScroll();

  /* ---------- Breadcrumb on sub-pages ---------- */
  const findPage = () => {
    for (const section of SECTIONS) {
      for (const link of section.links) {
        if (isCurrent(link.href)) return { section, link };
      }
    }
    return null;
  };
  const isHome = norm(P + 'index.html') === here;
  const found = findPage();
  if (!isHome && header) {
    const crumb = document.createElement('nav');
    crumb.className = 'crumb-strip';
    crumb.setAttribute('aria-label', 'You are here');
    const sectionLabel = found ? found.section.label : 'Rooms';
    const pageLabel = found ? found.link.title : (document.querySelector('h1')?.textContent || document.title);
    crumb.innerHTML = `
      <a href="${P}index.html">Home</a>
      <span aria-hidden="true">/</span>
      <button type="button" data-crumb-index>${sectionLabel}</button>
      <span aria-hidden="true">/</span>
      <strong aria-current="page">${pageLabel}</strong>`;
    header.insertAdjacentElement('afterend', crumb);
    crumb.querySelector('[data-crumb-index]').addEventListener('click', openIndex);
  }

  /* ---------- Footer explore columns ---------- */
  document.querySelectorAll('footer.site-footer').forEach((footer) => {
    const explore = document.createElement('nav');
    explore.className = 'footer-index';
    explore.setAttribute('aria-label', 'Explore the lab');
    explore.innerHTML = SECTIONS.map((section) => `
      <div>
        <strong>${section.label}</strong>
        <ul>${section.links.map((link) => `<li><a href="${P}${link.href}">${link.title}</a></li>`).join('')}</ul>
      </div>`).join('');
    footer.insertAdjacentElement('afterbegin', explore);
  });

  /* ---------- Mark current page in the static header nav ---------- */
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (norm(link.getAttribute('href')) === here) link.setAttribute('aria-current', 'page');
  });
})();
