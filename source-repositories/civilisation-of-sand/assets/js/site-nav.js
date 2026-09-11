const SITE_MAP = {
  "primary": [
    {
      "slug": "index",
      "href": "index.html",
      "label": "Home"
    },
    {
      "slug": "start",
      "href": "start.html",
      "label": "Story"
    },
    {
      "slug": "simulation",
      "href": "simulation.html",
      "label": "Simulation"
    },
    {
      "slug": "in-situ-resources",
      "href": "in-situ-resources.html",
      "label": "Materials"
    },
    {
      "slug": "great-filters",
      "href": "great-filters.html",
      "label": "Threats"
    },
    {
      "slug": "sources",
      "href": "sources.html",
      "label": "Sources"
    }
  ],
  "sequence": [
    {
      "slug": "index",
      "href": "index.html",
      "label": "Home"
    },
    {
      "slug": "start",
      "href": "start.html",
      "label": "Story"
    },
    {
      "slug": "simulation",
      "href": "simulation.html",
      "label": "Simulation"
    },
    {
      "slug": "subterranean-city",
      "href": "subterranean-city.html",
      "label": "Subterranean City"
    },
    {
      "slug": "surface-interface",
      "href": "surface-interface.html",
      "label": "Surface Interface"
    },
    {
      "slug": "in-situ-resources",
      "href": "in-situ-resources.html",
      "label": "Local Resources"
    },
    {
      "slug": "material-stack",
      "href": "material-stack.html",
      "label": "Material Stack"
    },
    {
      "slug": "maker-loop",
      "href": "maker-loop.html",
      "label": "Maker Loop"
    },
    {
      "slug": "ai-robotics",
      "href": "ai-robotics.html",
      "label": "AI And Robotics"
    },
    {
      "slug": "digital-twins",
      "href": "digital-twins.html",
      "label": "Digital Twins"
    },
    {
      "slug": "great-filters",
      "href": "great-filters.html",
      "label": "Great Filters"
    },
    {
      "slug": "energy-resilience",
      "href": "energy-resilience.html",
      "label": "Energy Resilience"
    },
    {
      "slug": "genesis-acceleration",
      "href": "genesis-acceleration.html",
      "label": "Genesis Acceleration"
    },
    {
      "slug": "story-quests",
      "href": "story-quests.html",
      "label": "Reading Paths"
    },
    {
      "slug": "ledger",
      "href": "ledger.html",
      "label": "Recognition Questions"
    },
    {
      "slug": "gumpi-gateway",
      "href": "gumpi-gateway.html",
      "label": "Gumpi Gateway"
    },
    {
      "slug": "trust-work",
      "href": "trust-work.html",
      "label": "Trust And Work"
    },
    {
      "slug": "wealth-mutuals",
      "href": "wealth-mutuals.html",
      "label": "Wealth And Mutuals"
    },
    {
      "slug": "brisbane-space-summit",
      "href": "brisbane-space-summit.html",
      "label": "Brisbane Space Summit"
    },
    {
      "slug": "learning-university",
      "href": "learning-university.html",
      "label": "Learning University"
    },
    {
      "slug": "roadmap",
      "href": "roadmap.html",
      "label": "Roadmap"
    },
    {
      "slug": "ecosystem-links",
      "href": "ecosystem-links.html",
      "label": "Ecosystem Links"
    },
    {
      "slug": "boundaries",
      "href": "boundaries.html",
      "label": "Boundaries"
    },
    {
      "slug": "sources",
      "href": "sources.html",
      "label": "Sources"
    },
    {
      "slug": "site-map",
      "href": "site-map.html",
      "label": "Site Map"
    }
  ]
};

function sitePrefix() {
  return '';
}

function withPrefix(href) {
  if (href.startsWith('http')) return href;
  return sitePrefix() + href;
}

function renderHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const current = document.body.dataset.page;
  const links = SITE_MAP.primary.map((item) => {
    const active = item.slug === current ? ' active' : '';
    return `<a class="${active.trim()}" href="${withPrefix(item.href)}">${item.label}</a>`;
  }).join('');
  header.innerHTML = `
    <div class="nav-shell">
      <a class="brand" href="${withPrefix('index.html')}">Civilisation of Sand</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>&#9776;</button>
      <nav class="site-nav" data-site-nav aria-label="Primary navigation">${links}</nav>
    </div>
  `;
  const toggle = header.querySelector('[data-menu-toggle]');
  const nav = header.querySelector('[data-site-nav]');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function renderFooter() {
  const footer = document.querySelector('[data-site-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <h2>Civilisation of Sand</h2>
        <p>A public sci-fi story backbone about capability, local resources, AI, robotics, making, repair, care and joyful responsible abundance.</p>
      </div>
      <div class="footer-links">
        <a href="${withPrefix('ecosystem-links.html')}">Ecosystem links</a>
        <a href="${withPrefix('site-map.html')}">Site map</a>
        <a href="${withPrefix('boundaries.html')}">Boundaries</a>
        <a href="${withPrefix('sources.html')}">Sources</a>
        <a href="https://github.com/auraofintelligence/civilisation-of-sand#readme">README</a>
        <a href="https://github.com/auraofintelligence/civilisation-of-sand/blob/main/LICENCE.md">Licence</a>
        <a href="https://github.com/auraofintelligence/civilisation-of-sand">GitHub repo</a>
        <span>Last updated: 18 June 2026</span>
      </div>
    </div>
  `;
}

function renderSequence() {
  const nav = document.querySelector('[data-sequence-nav]');
  if (!nav) return;
  const current = document.body.dataset.sequenceId || document.body.dataset.page;
  const index = SITE_MAP.sequence.findIndex((item) => item.slug === current);
  if (index < 0) {
    nav.remove();
    return;
  }
  const prev = SITE_MAP.sequence[index - 1];
  const next = SITE_MAP.sequence[index + 1];
  const parts = [];
  if (prev) parts.push(`<a href="${withPrefix(prev.href)}">&larr; ${prev.label}</a>`);
  if (next) parts.push(`<a href="${withPrefix(next.href)}">${next.label} &rarr;</a>`);
  nav.innerHTML = parts.join('');
}

function wireBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;
  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 520);
  }, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

renderHeader();
renderFooter();
renderSequence();
wireBackToTop();
