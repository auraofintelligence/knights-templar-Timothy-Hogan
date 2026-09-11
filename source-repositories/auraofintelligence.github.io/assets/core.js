/*
 * Aura of Intelligence: shared page behaviour.
 * Reveal-on-scroll and the click-to-load video facade. Both are
 * progressive enhancement: every page is complete without this file.
 */
(() => {
  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Video facade: never load a live player until clicked ---------- */
  document.querySelectorAll('[data-video-facade]').forEach((facade) => {
    facade.addEventListener('click', () => {
      const id = facade.dataset.videoFacade;
      const list = facade.dataset.videoList === 'true';
      const src = list
        ? `https://www.youtube-nocookie.com/embed/videoseries?list=${id}&autoplay=1`
        : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = facade.dataset.videoTitle || 'Video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      facade.innerHTML = '';
      facade.appendChild(iframe);
      facade.removeAttribute('role');
      facade.style.cursor = 'default';
    }, { once: true });
  });
})();
