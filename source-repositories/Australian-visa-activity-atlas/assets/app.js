(function () {
  "use strict";

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (navToggle && navLinks) {
    const closeNavigation = function () {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (event) {
      if (event.target.matches("a")) {
        closeNavigation();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNavigation();
        navToggle.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (!navLinks.classList.contains("is-open") || navLinks.contains(event.target) || navToggle.contains(event.target)) return;
      closeNavigation();
    });
  }

  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    const updateBackToTop = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 650);
    };
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener("click", function () {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  const footer = document.querySelector(".footer");
  if (footer && !footer.querySelector("[data-travel-constellation]")) {
    footer.insertAdjacentHTML("afterbegin", `
      <section class="shell travel-constellation" data-travel-constellation>
        <div><p class="eyebrow">Travel constellation</p><h2>Three maps. Three different jobs.</h2></div>
        <div class="travel-link-row">
          <a href="https://auraofintelligence.github.io/Australian-world-travel/"><strong>Australian World Travel</strong><span>Earlier entry, mission and logistics tools</span></a>
          <a href="https://auraofintelligence.github.io/strange-but-true-travel-oracle/"><strong>Travel Oracle</strong><span>Serendipity and non-linear navigation</span></a>
          <a href="https://auraofintelligence.github.io/global-founder-atlas/"><strong>Global Founder Atlas</strong><span>Founder, funding and relocation opportunities</span></a>
        </div>
      </section>`);
  }

  document.querySelectorAll("[data-print]").forEach(function (button) {
    button.addEventListener("click", function () { window.print(); });
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
