/*
 * Aura of Intelligence: the hero animation.
 * This is the actual Aura geometry, stylised for 2D canvas: seven nested
 * tori in chakra colours (red innermost to violet outermost), each ring
 * divided into 24 sectors on the 15-degree rhythm of the 12x24 matrix,
 * with a lit band sweeping each ring (kundalini rising as a spiral of
 * highlights), a gold zero-point core, and a faint wireframe geosphere
 * holding it all. Drawn from Luke's own 3ds Max / Blender source models.
 * No WebGL, no libraries; a few hundred flat quads per frame.
 * Under prefers-reduced-motion it renders one calm static frame.
 * Progressive enhancement only: every page is complete without this file.
 */
(() => {
  const canvas = document.querySelector('[data-aura-canvas]');
  if (!canvas || !canvas.getContext) { return; }
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Chakra ROYGBIV, innermost to outermost, matching the source models. */
  const CHAKRA = ['#ff4646', '#ff9440', '#ffd23f', '#3ddc84', '#37a5ff', '#6a5cff', '#b05cff'];
  const GOLD = '#ffcf6e';
  const TILT = 0.46;          /* 3/4 perspective squash, like the ortho views */
  const SECTORS = 24;         /* 24 columns = 15 degrees each */
  const STEP = (Math.PI * 2) / SECTORS;

  let w = 0, h = 0, narrow = false;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    narrow = w < 860;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', () => { resize(); frame(t || 140); }, { passive: true });

  const pt = (cx, cy, r, a) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r * TILT];

  const quad = (cx, cy, r0, r1, a0, a1) => {
    const [x0, y0] = pt(cx, cy, r0, a0);
    const [x1, y1] = pt(cx, cy, r0, a1);
    const [x2, y2] = pt(cx, cy, r1, a1);
    const [x3, y3] = pt(cx, cy, r1, a0);
    ctx.beginPath();
    ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3);
    ctx.closePath();
  };

  const ellipse = (cx, cy, rx, ry) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  };

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    const cx = narrow ? w * 0.5 : w * 0.66;
    const cy = h * 0.52;
    const base = Math.min(w * (narrow ? 0.46 : 0.30), h * 0.46);
    const master = narrow ? 0.5 : 0.95;   /* keep text legible on small screens */
    const breathe = 1 + Math.sin(t * 0.008) * 0.012;

    /* Geosphere: the outer shell holding Earth and star maps. */
    const gR = base * 1.24 * breathe;
    ctx.strokeStyle = 'rgba(214, 226, 240, 0.16)';
    ctx.lineWidth = 1;
    ctx.globalAlpha = master;
    ellipse(cx, cy, gR, gR * TILT); ctx.stroke();
    for (let i = 1; i <= 2; i++) {                 /* latitude rings */
      const f = i / 3;
      ellipse(cx, cy - gR * TILT * f * 0.72, gR * Math.sqrt(1 - f * f), gR * TILT * Math.sqrt(1 - f * f) * 0.9); ctx.stroke();
      ellipse(cx, cy + gR * TILT * f * 0.72, gR * Math.sqrt(1 - f * f), gR * TILT * Math.sqrt(1 - f * f) * 0.9); ctx.stroke();
    }
    for (let i = 0; i < 3; i++) {                  /* meridians */
      ellipse(cx, cy, gR * Math.abs(Math.cos(i * Math.PI / 3 + t * 0.002)), gR * TILT); ctx.stroke();
    }

    /* Seven chakra tori: 24 sectors each, lit band sweeping upward-spiral. */
    for (let k = 6; k >= 0; k--) {
      const r0 = base * (0.34 + k * 0.105) * breathe;
      const r1 = r0 + base * 0.078;
      const dir = (k % 2 === 0) ? 1 : -1;
      const rot = t * 0.0016 * (1 + k * 0.14) * dir;
      const sweep = t * 0.012 - k * 0.85;          /* the rising highlight */
      for (let s = 0; s < SECTORS; s++) {
        const a0 = s * STEP + rot;
        const a1 = a0 + STEP * 0.9;                /* gap = the lattice line */
        let d = Math.abs((((a0 + STEP / 2) - sweep) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI);
        const lit = Math.max(0, 1 - d / 0.9);
        ctx.globalAlpha = master * (0.10 + lit * 0.55);
        ctx.fillStyle = CHAKRA[k];
        quad(cx, cy, r0, r1, a0, a1);
        ctx.fill();
      }
      /* band edges: the wireframe rings */
      ctx.globalAlpha = master * 0.4;
      ctx.strokeStyle = CHAKRA[k];
      ctx.lineWidth = 1;
      ellipse(cx, cy, r0, r0 * TILT); ctx.stroke();
      ellipse(cx, cy, r1, r1 * TILT); ctx.stroke();
    }

    /* The zero point: a gold core at the torus apex. */
    const pulse = 1 + Math.sin(t * 0.02) * 0.15;
    const coreR = base * 0.16 * pulse;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
    grad.addColorStop(0, 'rgba(255, 236, 190, 0.95)');
    grad.addColorStop(0.45, 'rgba(255, 207, 110, 0.55)');
    grad.addColorStop(1, 'rgba(255, 207, 110, 0)');
    ctx.globalAlpha = master;
    ctx.fillStyle = grad;
    ellipse(cx, cy, coreR, coreR * 0.8); ctx.fill();
    ctx.globalAlpha = 1;
  }

  /* Paint the first frame synchronously: the Aura must be present even in
     throttled tabs and webviews where requestAnimationFrame is delayed. */
  var t = 140;
  frame(t);

  if (reduced) { return; }                         /* one calm still of the Aura */

  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0] ? entries[0].isIntersecting : true;
    }).observe(canvas);
  }

  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible) { return; }
    if (canvas.clientWidth !== w || canvas.clientHeight !== h) { resize(); }
    t += 1;
    frame(t);
  };
  requestAnimationFrame(loop);
})();
