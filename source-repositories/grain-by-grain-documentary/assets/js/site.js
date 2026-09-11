(function () {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".site-nav a[data-page]").forEach(function (link) {
      if (link.dataset.page === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.textContent = "↑";
  document.body.appendChild(backToTop);

  function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 650);
  }

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  const acts = Array.from(document.querySelectorAll("[data-runtime-act]"));
  const runtimeProgress = document.querySelector(".runtime-progress");
  const runtimeLabel = document.querySelector("[data-runtime-label]");

  if (acts.length && runtimeProgress && runtimeLabel && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        const visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];

        if (!visible) return;
        const index = acts.indexOf(visible.target);
        const value = ((index + 1) / acts.length) * 100;
        runtimeProgress.style.width = value + "%";
        runtimeLabel.textContent = visible.target.dataset.runtimeLabel;
      },
      { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.35, 0.6] }
    );

    acts.forEach(function (act) { observer.observe(act); });
  }
})();
