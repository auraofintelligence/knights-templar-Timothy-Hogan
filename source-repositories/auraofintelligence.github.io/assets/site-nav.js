/*
 * Aura of Intelligence: site chrome.
 * One data file describes every page. The header, full-screen index,
 * breadcrumbs and footer explore-columns are all generated from it, so new
 * pages only need an entry here to appear everywhere.
 * Progressive enhancement: without JS the static header links still work.
 * Pattern inherited from the right-place-right-time / p4a cinema family.
 *
 * This site is being built and published in phases (see PLAN.md). Some
 * links below point to pages that don't exist yet: that's expected, not a
 * bug. Check todo.html for what's still being built.
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
      blurb: 'The front door, the whole shape of the site, and what only Luke can do next.',
      links: [
        { href: 'index.html', title: 'Home', note: 'A Bridge to The Infinite: the founder story and the full showcase.' },
        { href: 'pathways/index.html', title: 'The Pathways', note: 'All seventeen tools, filterable, in one place.' },
        { href: 'courses/index.html', title: 'Courses', note: 'Short courses, live streams, and interactive builders.' },
        { href: 'videos.html', title: 'Videos', note: 'Everything on screen.' },
        { href: 'contact.html', title: 'Contact', note: 'Get in touch.' },
        { href: 'todo.html', title: 'Build log & todo', note: "What's done, what's next, dated." },
        { href: 'colophon.html', title: 'Colophon', note: 'How this site itself is built.' },
        { href: 'sitemap.html', title: 'Site map', note: 'Every page and every link out, in one place.' }
      ]
    },
    {
      id: 'mind-self',
      num: '02',
      label: 'Mind & self',
      blurb: 'Building the digital side of you: your aura, your avatar, your palace, your world.',
      links: [
        { href: 'aura-builder.html', title: 'Aura Builder', note: 'Mind Uploader: your consciousness, digitised.' },
        { href: 'avatar-creator.html', title: 'Avatar Builder', note: 'Your digital twin.' },
        { href: 'mind-palaces.html', title: 'Mind Palace Builder', note: 'A place to keep what matters.' },
        { href: 'world-builder.html', title: 'World Builder', note: 'Build worlds, planets, galaxies.' }
      ]
    },
    {
      id: 'life-living',
      num: '03',
      label: 'Life & living',
      blurb: 'The tools that touch daily life: wellbeing, creation, devices, trust.',
      links: [
        { href: 'aura-wellness.html', title: 'Life Planning & Well Being', note: 'Plan a life, not just a day.' },
        { href: 'generative-a-i.html', title: 'Generative A.I. Customisation', note: 'Images, video, 3D, music, worlds, made to order.' },
        { href: 'smart-devices.html', title: 'Smart IoT Devices', note: 'Every device in your life, working together.' },
        { href: 'blockchain.html', title: 'Blockchain', note: 'GAJRA Earth, the Aura Affinity Marketplace, and what trust looks like on-chain.' }
      ]
    },
    {
      id: 'events-music-play',
      num: '04',
      label: 'Events, music & play',
      blurb: 'Gathering people, making things, having fun on purpose.',
      links: [
        { href: 'aura-events.html', title: 'Events & Event Management', note: 'Craft the unforgettable: every event a masterpiece.' },
        { href: 'calendar-of-events.html', title: 'Calendar of Events', note: "What's actually coming up." },
        { href: 'music.html', title: 'Music Creation', note: 'Lyrics, music, and music videos, AI-assisted.' },
        { href: 'gamification.html', title: 'Gamification of Life', note: 'GAJRA Earth and the games that make responsibility joyful.' },
        { href: 'space-weather-vr.html', title: 'Space Weather & Climate', note: 'Live data, VR education, a studio for the sky.' }
      ]
    },
    {
      id: 'frontiers',
      num: '05',
      label: 'Frontiers',
      blurb: 'The long-horizon builds: shelter, invention, food, space, and what comes after the surface.',
      links: [
        { href: 'aura-capsule-hotels.html', title: 'Aura Capsule Hotels', note: 'Sleep pods, XR, and a smart-city welcome.' },
        { href: 'tinkering-labs.html', title: 'Innovation Tinkering Labs', note: 'Maker spaces for every age and stage.' },
        { href: 'ai-auto-farm.html', title: 'In-Home A.I. Auto-Farm', note: 'Grow food at home, intelligently.' },
        { href: 'space-industry.html', title: 'Commercial Space Development', note: 'From orbital shipyards to a moon base amusement park.' },
        { href: 'subterranean-cities.html', title: 'Subterranean Eco-Cities', note: 'A refuge beneath the surface, imagined properly.' }
      ]
    },
    {
      id: 'more-from-aura',
      num: '06',
      label: 'More from Aura',
      blurb: 'The foundation, the causes, the toolkit, and the rest of the ecosystem.',
      links: [
        { href: 'alpha-infinity-foundation.html', title: 'Alpha Infinity Foundation', note: 'The guiding force behind the ecosystem.' },
        { href: 'anti-dementia.html', title: 'Anti-Dementia Aura', note: 'Cognitive support, built with heart.' },
        { href: 'cosmic-nexus.html', title: 'Cosmic Nexus', note: 'A travel club first: building the tribe before the place.' },
        { href: 'tool-kit.html', title: 'Tool Kit', note: 'The working kit behind everything.' },
        { href: 'cloud-compute.html', title: 'Cloud Compute', note: 'Where the compute comes from.' },
        { href: 'podcasts.html', title: 'Podcast Channels', note: 'Listen in.' },
        { href: 'blog.html', title: 'Blog', note: 'Field notes.' },
        { href: 'choice-content.html', title: 'Choice Content', note: 'Recommended, not sponsored-first.' },
        { href: 'affiliates.html', title: 'Affiliate Promotions', note: 'Tools Luke actually uses.' },
        { href: 'aura-store.html', title: 'Aura Store', note: 'The shopfront.' }
      ]
    },
    {
      id: 'courses',
      num: '07',
      label: 'Courses',
      blurb: 'Short courses on Luke’s other work, presented by a digital avatar; live streams by the human.',
      links: [
        { href: 'courses/index.html', title: 'Courses hub', note: 'Grants, tenders, P4A, travel, patronage, and the long horizon.' },
        { href: 'course-creation.html', title: 'Course Creation', note: 'How the courses themselves get made.' }
      ]
    }
  ];

  const EXTERNAL = [
    { href: 'https://github.com/auraofintelligence/auraofintelligence.github.io', title: 'How this site is built' },
    { href: 'https://auraofintelligence.github.io/i-C-infinity-music-universe/', title: 'i C. infinity: the music universe' },
    { href: 'https://auraofintelligence.github.io/strange-but-true/', title: 'Strange but True: the live local engine' },
    { href: 'https://auraofintelligence.github.io/right-place-right-time/', title: 'Right Place, Right Time: back the mission' },
    { href: 'https://auraofintelligence.github.io/p4a-xyz-cinema/', title: 'P4A: the civic workbench' },
    { href: 'https://gajra.earth', title: 'GAJRA Earth: the Fair Go Future' },
    { href: 'https://iseeinfinity.com', title: 'iseeinfinity.com: my other website' },
    { href: 'https://lukecatalyst.com', title: 'lukecatalyst.com: my other website' }
  ];

  const norm = (href) => new URL(href, location.href).pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  const here = norm(location.href);
  const isCurrent = (href) => norm(P + href) === here;

  const sectionMarkup = (section) => {
    const links = section.links.map((link) => `
      <li data-index-item>
        <a href="${P}${link.href}"${isCurrent(link.href) ? ' aria-current="page"' : ''}>
          <strong>${link.title}</strong>
          <em>${link.note}</em>
        </a>
      </li>`).join('');
    return `
    <section class="index-section" data-index-section>
      <header><span>${section.num}</span><h2>${section.label}</h2><p>${section.blurb}</p></header>
      <ul class="index-links">${links}</ul>
    </section>`;
  };

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
        <p class="index-kicker">Aura of Intelligence / every page</p>
        <label class="index-search">
          <span class="sr-only">Filter the index</span>
          <input type="search" placeholder="Type to filter…" data-index-search autocomplete="off">
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
      ? `${items.length} pages in the index`
      : `${visible} of ${items.length} pages match`;
  };
  setCount(items.length);

  const filterIndex = () => {
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
  };
  searchInput.addEventListener('input', filterIndex);

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
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    reduced ? done() : setTimeout(done, 320);
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

  /* ---------- Breadcrumb ---------- */
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
    const sectionLabel = found ? found.section.label : 'Pages';
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
    explore.setAttribute('aria-label', 'Explore the site');
    explore.innerHTML = SECTIONS.map((section) => `
      <div>
        <strong>${section.label}</strong>
        <ul>${section.links.slice(0, 6).map((link) => `<li><a href="${P}${link.href}">${link.title}</a></li>`).join('')}</ul>
      </div>`).join('') + `
      <div>
        <strong>Everything</strong>
        <ul><li><a href="${P}sitemap.html">Full site map</a></li></ul>
      </div>`;
    footer.insertAdjacentElement('afterbegin', explore);
  });

  /* ---------- Mark current page in the static header nav ---------- */
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (norm(link.getAttribute('href')) === here) link.setAttribute('aria-current', 'page');
  });
})();
