/*
 * Cinematic layer: pointer aura, card tilt + sheen, counter roll-ups,
 * journey-line and kintsugi-seam drawing.
 * Every effect is additive: no JS, no fine pointer, or
 * prefers-reduced-motion all degrade to the calm version.
 */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };

  /* Journey line: draw once the page settles. The timeout fallback
     covers backgrounded tabs where rAF is suspended. */
  document.querySelectorAll('.journey-line').forEach((line) => {
    const draw = () => line.classList.add('is-drawn');
    requestAnimationFrame(() => requestAnimationFrame(draw));
    setTimeout(draw, 600);
  });

  /* Kintsugi seams: the crack draws in gold when it enters view */
  const seams = Array.from(document.querySelectorAll('.kintsugi-seam'));
  const drawSeams = () => seams.forEach((s) => {
    if (!s.classList.contains('is-drawn') && inView(s)) s.classList.add('is-drawn');
  });
  drawSeams();
  window.addEventListener('scroll', drawSeams, { passive: true });

  /* Counter roll-ups: numbers earn their size */
  const counters = Array.from(document.querySelectorAll('[data-count]'));
  const runCounter = (el) => {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (reduced || !Number.isFinite(target)) return;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const checkCounters = () => counters.forEach((c) => { if (inView(c)) runCounter(c); });
  checkCounters();
  window.addEventListener('scroll', checkCounters, { passive: true });

  if (!fine || reduced) return;

  /* Cursor aura: soft gold-teal light follows the pointer */
  const aura = document.createElement('div');
  aura.className = 'cursor-aura';
  aura.setAttribute('aria-hidden', 'true');
  document.body.appendChild(aura);
  let pending = false, px = 0, py = 0;
  window.addEventListener('pointermove', (e) => {
    px = e.clientX; py = e.clientY;
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      aura.style.setProperty('--cx', px + 'px');
      aura.style.setProperty('--cy', py + 'px');
      aura.classList.add('is-active');
    });
  }, { passive: true });

  /* Card tilt + sheen: subtle, ±5 degrees, resets on leave */
  document.querySelectorAll('.feature-grid article, .signal, .statement-card').forEach((el) => {
    el.setAttribute('data-tilt', '');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(56rem) rotateX(${((0.5 - y) * 5).toFixed(2)}deg) rotateY(${((x - 0.5) * 6).toFixed(2)}deg) translateY(-2px)`;
      el.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
      el.classList.add('is-tilting');
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
      el.classList.remove('is-tilting');
    });
  });
})();
