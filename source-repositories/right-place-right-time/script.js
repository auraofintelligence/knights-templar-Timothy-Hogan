/*
 * Right Place, Right Time: page behaviour.
 * Lean on purpose: scroll-reveal and a back-to-top button.
 * Low-bandwidth readers first: without JS, styles.css shows every
 * .reveal panel via html:not(.js), and register.html carries the
 * full project register as static text.
 */
(() => {
  /* Scroll reveal: runs after core.js has rendered any data-driven grids.
     Deliberately NOT IntersectionObserver. Content visibility must never
     depend on an observer callback arriving: browsers throttle or delay IO
     in background tabs, prerendered pages and low-power modes, which can
     leave a panel at opacity 0 for the whole visit. A plain geometry sweep
     on scroll and resize gives the same effect with nothing that can
     strand content. */
  const pending = new Set(document.querySelectorAll('.reveal, .kintsugi-seam'));
  const show = (el) => el.classList.add(el.classList.contains('kintsugi-seam') ? 'is-drawn' : 'is-visible');
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
  /* Late-layout safety net (fonts, images and injected grids shifting geometry). */
  setTimeout(sweep, 400);
  setTimeout(sweep, 1500);

  /* Back to top */
  const top = document.createElement('button');
  top.type = 'button';
  top.className = 'back-to-top';
  top.textContent = 'Top';
  top.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(top);
  top.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      top.classList.toggle('is-shown', window.scrollY > 220);
    });
  }, { passive: true });
})();
