document.documentElement.classList.add('js');

const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (navToggle && siteNav) {
  const closeNav = (returnFocus = false) => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) navToggle.focus();
  };

  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeNav();
    }
  });

  document.addEventListener('click', (event) => {
    if (siteNav.classList.contains('open') && !siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) {
      closeNav(true);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1088) closeNav();
  });
}

const backToTop = document.querySelector('[data-back-to-top]');

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle('visible', window.scrollY > 700);
  };

  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    const topHeading = document.querySelector('h1');
    if (topHeading) {
      topHeading.setAttribute('tabindex', '-1');
      topHeading.focus({ preventScroll: true });
    }
  });
}

document.querySelectorAll('.table-wrap').forEach((wrapper, index) => {
  const caption = wrapper.querySelector('caption');
  const label = caption?.textContent?.trim() || `Scrollable data table ${index + 1}`;
  const cue = document.createElement('p');
  cue.className = 'table-cue';
  cue.id = `table-cue-${index + 1}`;
  cue.textContent = 'Scrollable table: swipe sideways or use the keyboard to see every column.';
  wrapper.before(cue);
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', label);
  wrapper.setAttribute('aria-describedby', cue.id);
});

document.querySelectorAll('.plain-list, .step-list, .source-list').forEach((list) => {
  list.setAttribute('role', 'list');
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const filterButtons = document.querySelectorAll('[data-chip-filter]');
const chipRows = document.querySelectorAll('[data-chip-era]');
const filterBar = document.querySelector('.filter-bar');
let filterStatus;

if (filterBar && chipRows.length) {
  filterStatus = document.createElement('p');
  filterStatus.className = 'muted';
  filterStatus.setAttribute('aria-live', 'polite');
  filterStatus.textContent = `${chipRows.length} chip references shown.`;
  filterBar.after(filterStatus);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.chipFilter;
    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));

    chipRows.forEach((row) => {
      const eras = row.dataset.chipEra.split(' ');
      row.hidden = filter !== 'all' && !eras.includes(filter);
    });

    if (filterStatus) {
      const visibleCount = [...chipRows].filter((row) => !row.hidden).length;
      filterStatus.textContent = `${visibleCount} chip reference${visibleCount === 1 ? '' : 's'} shown.`;
    }
  });
});
