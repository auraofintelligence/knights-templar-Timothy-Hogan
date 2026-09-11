/*
 * Micronova and Excursions: shared page behaviour + the hero animation.
 *
 * Progressive enhancement only: every page is complete without this file.
 * Chassis inherited from Grain by Grain, which took it from the aura /
 * right-place cinema family. SEQUENCE is the single source of prev/next:
 * add a page there and every page in the rail updates.
 */
(() => {
  document.documentElement.classList.add('js');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* The rail is the core reading path: six pages, in the order the argument is
     made. Reference pages sit outside it. They stay reachable from the site map
     and from links in the body of the page that uses them, and they do not
     appear in prev/next. */
  const SEQUENCE = [
    { slug: 'home', file: 'index.html', label: 'Home' },
    { slug: 'calm', file: 'calm.html', label: 'The quiet we were born into' },
    { slug: 'micronova', file: 'micronova.html', label: 'The claim' },
    { slug: 'building', file: 'building.html', label: 'What is being built' },
    { slug: 'earthquake', file: 'earthquake.html', label: 'Earthquake prediction' },
    { slug: 'test', file: 'test.html', label: 'How anyone checks any of it' },
  ];

  /* ---------- Reveal on scroll + kintsugi seams ----------
     Deliberately NOT IntersectionObserver. Content visibility must never
     depend on an observer callback arriving: browsers throttle or delay IO
     in background tabs, prerendered pages and low-power modes, and the old
     version also used a fractional threshold that blocks taller than the
     viewport (threats' full card list) could never meet, leaving whole
     sections at opacity 0 forever. A plain geometry sweep on scroll/resize
     gives the same staggered effect with nothing that can strand content. */
  const pending = new Set(
    [...document.querySelectorAll('.reveal'), ...document.querySelectorAll('.kintsugi-seam')]
  );
  const show = (el) => el.classList.add(el.classList.contains('kintsugi-seam') ? 'is-drawn' : 'is-visible');
  if (reduced) {
    pending.forEach(show);
    pending.clear();
  }
  const sweep = () => {
    if (!pending.size) { return; }
    /* Only the top edge is tested, so anything scrolled past stays revealed:
       an anchor jump or a restored scroll position cannot skip a block. */
    const line = window.innerHeight * 0.92;
    pending.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < line) { show(el); pending.delete(el); }
    });
  };
  sweep();
  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep, { passive: true });
  window.addEventListener('load', sweep);
  /* Late-layout safety net (fonts/images shifting geometry after first paint). */
  setTimeout(sweep, 400);
  setTimeout(sweep, 1500);

  /* ---------- Mark the current page in the nav ---------- */
  const normalise = (value) => {
    const url = new URL(value, location.href);
    return url.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  };
  const here = normalise(location.href);
  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) { return; }
    if (normalise(href) === here) { link.setAttribute('aria-current', 'page'); }
  });

  /* ---------- Prev / next rail, injected before the footer ---------- */
  const page = document.body.getAttribute('data-page');
  const footer = document.querySelector('.site-footer');
  const idx = SEQUENCE.findIndex((s) => s.slug === page);
  if (footer && idx !== -1) {
    const prev = SEQUENCE[idx - 1];
    const next = SEQUENCE[idx + 1];
    const rail = document.createElement('nav');
    rail.className = 'rung-nav';
    rail.setAttribute('aria-label', 'Ladder navigation');
    const left = prev
      ? `<a href="${prev.file}">&larr; ${prev.label}</a>`
      : `<span></span>`;
    const right = next
      ? `<a href="${next.file}">${next.label} &rarr;</a>`
      : `<a href="sitemap.html">See the whole map &rarr;</a>`;
    rail.innerHTML = left + right;
    footer.insertAdjacentElement('beforebegin', rail);
  }

  /* ---------- Site map link into the footer, everywhere ---------- */
  const footerLinks = document.querySelector('.footer-links');
  if (footerLinks && !footerLinks.querySelector('[data-map-link]')) {
    const map = document.createElement('a');
    map.href = 'sitemap.html';
    map.textContent = 'Site map';
    map.setAttribute('data-map-link', '');
    footerLinks.insertBefore(map, footerLinks.firstChild);
  }

  /* ---------- To-top button ---------- */
  const toTop = document.createElement('button');
  toTop.type = 'button';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<span aria-hidden="true">&uarr;</span>';
  document.body.appendChild(toTop);
  const toggleTop = () => toTop.classList.toggle('is-visible', window.scrollY > 640);
  toggleTop();
  window.addEventListener('scroll', toggleTop, { passive: true });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    const target = document.getElementById('main') || document.body;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  /* ---------- Condensing header ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-condensed', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Hero canvas: drifting particles inside field arcs ----------
     Abstract motion, not a depiction of data. The arcs stand in for a dipole
     geometry and the grains for a particle wind; nothing here is measured and
     nothing should be read as a figure. */
  const canvas = document.querySelector('[data-sand-canvas]');
  if (!canvas || !canvas.getContext) { return; }
  const ctx = canvas.getContext('2d');

  const GOLD = [255, 207, 110];
  const BAY = [43, 227, 194];
  const DUSK = [177, 151, 252];

  let w = 0, h = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  const COUNT = 220;
  const grains = [];
  let seed = 7;
  const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < COUNT; i++) {
    const tint = rand();
    grains.push({
      x: rand(), y: rand(),
      r: 0.6 + rand() * 1.7,
      speed: 0.00016 + rand() * 0.00042,
      sway: 0.4 + rand() * 1.4,
      phase: rand() * Math.PI * 2,
      col: tint < 0.62 ? GOLD : (tint < 0.86 ? BAY : DUSK),
      alpha: 0.14 + rand() * 0.5,
    });
  }

  /* Nested arcs, widest last, breathing slowly. */
  const arcs = [0.34, 0.52, 0.72, 0.94];

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    arcs.forEach((spread, i) => {
      const breathe = 1 + Math.sin(t * 0.0006 + i * 0.9) * 0.035;
      const rx = w * spread * 0.5 * breathe;
      const ry = h * (0.30 + spread * 0.34) * breathe;
      ctx.strokeStyle = `rgba(255, 207, 110, ${0.11 - i * 0.018})`;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 1.02, rx, ry, 0, Math.PI, Math.PI * 2);
      ctx.stroke();
    });
    grains.forEach((g) => {
      const gx = ((g.x - t * g.speed) % 1 + 1) % 1;
      const drift = Math.sin(t * 0.0011 * g.sway + g.phase) * 0.012;
      const gy = Math.min(0.985, g.y + drift + (1 - gx) * 0.05);
      const [r, gr, b] = g.col;
      ctx.globalAlpha = g.alpha * (0.55 + 0.45 * Math.sin(t * 0.002 + g.phase));
      ctx.fillStyle = `rgb(${r}, ${gr}, ${b})`;
      ctx.beginPath();
      ctx.arc(gx * w, gy * h, g.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  let t = 400;
  frame(t);
  if (reduced) { return; }

  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0] ? entries[0].isIntersecting : true;
    }).observe(canvas);
  }
  window.addEventListener('resize', () => { resize(); frame(t); }, { passive: true });

  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible) { return; }
    if (canvas.clientWidth !== w || canvas.clientHeight !== h) { resize(); }
    t += 1;
    frame(t);
  };
  requestAnimationFrame(loop);
})();
