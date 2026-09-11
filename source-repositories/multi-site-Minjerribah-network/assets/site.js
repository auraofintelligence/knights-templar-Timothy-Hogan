document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");
const menuLabel = menuButton?.querySelector("[data-menu-label]");

const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);

if (menuButton && siteNav) {
  const menuLinks = [...siteNav.querySelectorAll("a")];
  const backgroundSelector = ".skip-link, .brand, main, .route-nav, .site-footer, .to-top, .follow-rail";
  siteNav.inert = true;
  siteNav.setAttribute("aria-hidden", "true");

  function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute("aria-expanded", String(open));
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
    siteNav.inert = !open;
    siteNav.setAttribute("aria-hidden", String(!open));
    siteNav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    document.querySelectorAll(backgroundSelector).forEach((element) => { element.inert = open; });

    if (open) {
      requestAnimationFrame(() => (siteNav.querySelector('[aria-current="page"]') || menuLinks[0])?.focus());
    } else if (restoreFocus) {
      menuButton.focus();
    }
  }

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!open, open);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (menuButton.getAttribute("aria-expanded") !== "true") return;
    if (event.key === "Escape") {
      setMenu(false, true);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [menuButton, ...menuLinks];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("seen");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01 })
  : null;

document.querySelectorAll("[data-reveal]").forEach((item) => {
  item.querySelectorAll(".site-card, .focus-card, .editorial-grid a, .detail-card, .principle-grid article, .story-list article, .layer, .money-flow article, .pathway-strip article, .link-card, .sitemap-grid a, .source-list article, .builder-jump a, .organisation-card, .brief-grid article").forEach((card, cardIndex) => {
    card.style.setProperty("--card-index", Math.min(cardIndex, 8));
  });
  if (observer) observer.observe(item);
  else item.classList.add("seen");
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;
const heroImage = document.querySelector(".hero .hero-image, .page-hero .hero-image");

function updateScrollEffects() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const amount = height > 0 ? window.scrollY / height : 0;
  progress.style.transform = `scaleX(${Math.min(Math.max(amount, 0), 1)})`;
  if (heroImage && !reducedMotion) {
    heroImage.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.08, 48)}px`);
  }
}

updateScrollEffects();
window.addEventListener("scroll", updateScrollEffects, { passive: true });

if (finePointer && !reducedMotion) {
  const hero = document.querySelector(".hero, .page-hero");
  hero?.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    hero.style.setProperty("--mx", `${x * 100}%`);
    hero.style.setProperty("--my", `${y * 100}%`);
    hero.style.setProperty("--hero-x", `${(x - .5) * -12}px`);
    hero.style.setProperty("--hero-y", `${(y - .5) * -8}px`);
  }, { passive: true });
  hero?.addEventListener("pointerleave", () => {
    hero.style.removeProperty("--mx");
    hero.style.removeProperty("--my");
    hero.style.removeProperty("--hero-x");
    hero.style.removeProperty("--hero-y");
  });

  document.querySelectorAll(".button.magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      button.style.transform = `translate(${x * .12}px, ${y * .16}px)`;
    }, { passive: true });
    button.addEventListener("pointerleave", () => button.style.removeProperty("transform"));
  });
}

const guidedSections = [...document.querySelectorAll("main > section[id]")].filter((section) => section.querySelector("h2"));

if (guidedSections.length > 1) {
  const rail = document.createElement("nav");
  rail.className = "follow-rail";
  rail.setAttribute("aria-label", "Follow this page");
  const railLinks = guidedSections.map((section) => {
    const link = document.createElement("a");
    const label = section.querySelector("h2").textContent.trim().replace(/\.$/, "");
    link.href = `#${section.id}`;
    link.setAttribute("aria-label", label);
    rail.append(link);
    return link;
  });
  document.body.append(rail);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        railLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-38% 0px -52%", threshold: 0 });
    guidedSections.forEach((section) => sectionObserver.observe(section));
  }
}
