(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const header = document.querySelector(".site-header");
  const progressLine = document.querySelector(".scroll-progress i");
  const heroImage = document.querySelector(".hero-image");
  let scrollFrame = 0;

  function updateScrollEffects() {
    const top = window.scrollY;
    const available = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    header?.classList.toggle("is-scrolled", top > 22);
    progressLine?.style.setProperty("--scroll-progress", String(Math.min(top / available, 1)));
    if (heroImage && !reducedMotion.matches) {
      heroImage.style.setProperty("--hero-parallax", Math.min(top * 0.035, 34) + "px");
    }
    scrollFrame = 0;
  }

  window.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollEffects);
  }, { passive: true });
  updateScrollEffects();

  const menuButton = document.querySelector(".world-menu-button");
  const menu = document.querySelector(".world-menu");
  const menuClose = document.querySelector(".world-menu-close");
  const backgroundRegions = [document.querySelector("main"), document.querySelector(".site-footer")].filter(Boolean);

  function menuFocusable() {
    return [...menu.querySelectorAll('a[href], button:not([disabled])')].filter((element) => !element.hasAttribute("inert"));
  }

  function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    backgroundRegions.forEach((region) => region.setAttribute("inert", ""));
    window.requestAnimationFrame(() => menuClose.focus());
  }

  function closeMenu(returnFocus = false) {
    menuButton.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    backgroundRegions.forEach((region) => region.removeAttribute("inert"));
    if (returnFocus) menuButton.focus();
  }

  menuButton?.addEventListener("click", () => {
    if (menuButton.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });

  menuClose?.addEventListener("click", () => closeMenu(true));
  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (!menu?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = menuFocusable();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const revealTargets = [...document.querySelectorAll(".reveal")];
  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-ready");
    target.style.setProperty("--reveal-delay", (index % 4) * 70 + "ms");
  });

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.07 });
    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  const orbit = document.querySelector("[data-sovereign-orbit]");
  if (orbit) {
    const reading = orbit.querySelector("[data-orbit-reading]");
    const orbitMeanings = {
      body: "The body remains a living home, not a remote asset.",
      story: "A person's own words give shape to the record.",
      data: "Personal records begin close to the person they describe.",
      memory: "Memory holds ambiguity, feeling and change over time.",
      permission: "Sharing begins with a separate choice and relationship."
    };
    orbit.querySelectorAll("[data-orbit]").forEach((button) => {
      button.addEventListener("click", () => {
        orbit.querySelectorAll("[data-orbit]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        reading.textContent = orbitMeanings[button.dataset.orbit];
      });
    });
  }

  const agreement = document.querySelector("[data-agreement-prism]");
  if (agreement) {
    const title = agreement.querySelector("[data-agreement-title]");
    const copy = agreement.querySelector("[data-agreement-copy]");
    const question = agreement.querySelector("[data-agreement-question]");
    const facets = {
      purpose: [
        "What brings this group together?",
        "A shared purpose may begin with wellbeing access, local digital infrastructure, food, resilience, research or a mixture shaped by the members.",
        "Which shared benefit feels most alive in this place?"
      ],
      membership: [
        "Who belongs, and how?",
        "Membership may hold different kinds of participation, contribution, access and voice while respecting that people's circumstances differ.",
        "What would help people feel welcomed, respected and free to leave?"
      ],
      ownership: [
        "What is shared and what stays personal?",
        "Land, buildings, equipment, records and intellectual work may sit under different ownership arrangements. The agreement makes those boundaries visible.",
        "Which assets belong with the co-operative, the member or another partner?"
      ],
      sharing: [
        "What moves between people?",
        "Money, time, equipment access, knowledge and personal data have different meanings. A single permission does not cover every kind of sharing.",
        "Which sharing relationships deserve their own separate agreement?"
      ],
      leaving: [
        "How does a relationship end with care?",
        "Exit terms may cover member shares, personal files, future access, unfinished contributions and relationships that continue outside the co-operative.",
        "What would make departure clear, dignified and recoverable?"
      ]
    };

    agreement.querySelectorAll("[data-agreement]").forEach((button) => {
      button.addEventListener("click", () => {
        agreement.querySelectorAll("[data-agreement]").forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        const [nextTitle, nextCopy, nextQuestion] = facets[button.dataset.agreement];
        title.textContent = nextTitle;
        copy.textContent = nextCopy;
        question.textContent = nextQuestion;
      });
    });
  }

  if (finePointer.matches && !reducedMotion.matches) {
    const tiltTargets = document.querySelectorAll(".future-portal, .space-panel, .value-number, .portrait-song");
    tiltTargets.forEach((target) => {
      target.setAttribute("data-tilt", "");
      target.addEventListener("pointermove", (event) => {
        const bounds = target.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        target.style.transform = "perspective(1000px) rotateX(" + (-y * 2.4).toFixed(2) + "deg) rotateY(" + (x * 2.8).toFixed(2) + "deg) translateY(-4px)";
      });
      target.addEventListener("pointerleave", () => {
        target.style.transform = "";
      });
    });
  }

  const affordability = document.querySelector("[data-affordability]");
  if (affordability) {
    const membersInput = affordability.querySelector("[data-value-members]");
    const totalInput = affordability.querySelector("[data-value-total]");
    const supportInput = affordability.querySelector("[data-value-support]");
    const result = affordability.querySelector("[data-value-result]");
    const formatter = new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0
    });

    function updateAffordability() {
      const members = Math.max(Number(membersInput.value) || 1, 1);
      const total = Math.max(Number(totalInput.value) || 0, 0);
      const support = Math.max(Number(supportInput.value) || 0, 0);
      const sharedAmount = Math.max(total - support, 0);
      const formatted = formatter.format(sharedAmount / members);
      result.textContent = formatted.startsWith("$") ? "A" + formatted : formatted;
    }

    [membersInput, totalInput, supportInput].forEach((input) => {
      input.addEventListener("input", updateAffordability);
    });
    affordability.querySelector("form")?.addEventListener("submit", (event) => event.preventDefault());
    updateAffordability();
  }

  const canvas = document.querySelector("[data-constellation]");
  if (!canvas || reducedMotion.matches) return;

  const context = canvas.getContext("2d", { alpha: true });
  let width = 0;
  let height = 0;
  let deviceScale = 1;
  let points = [];
  let animationFrame = 0;
  const pointer = { x: -1000, y: -1000, active: false };

  function createPoint() {
    const colours = ["#86fff2", "#a96dff", "#ff4f86", "#ffe8aa"];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.11,
      vy: (Math.random() - 0.5) * 0.1,
      radius: 0.55 + Math.random() * 1.15,
      colour: colours[Math.floor(Math.random() * colours.length)]
    };
  }

  function resizeConstellation() {
    width = window.innerWidth;
    height = window.innerHeight;
    deviceScale = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.floor(width * deviceScale);
    canvas.height = Math.floor(height * deviceScale);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    const amount = width < 760 ? 22 : 46;
    points = Array.from({ length: amount }, createPoint);
  }

  function drawConstellation() {
    context.clearRect(0, 0, width, height);
    for (let index = 0; index < points.length; index += 1) {
      const point = points[index];
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -10) point.x = width + 10;
      if (point.x > width + 10) point.x = -10;
      if (point.y < -10) point.y = height + 10;
      if (point.y > height + 10) point.y = -10;

      if (pointer.active) {
        const dx = pointer.x - point.x;
        const dy = pointer.y - point.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 170 && distance > 1) {
          point.x -= (dx / distance) * 0.08;
          point.y -= (dy / distance) * 0.08;
        }
      }

      context.beginPath();
      context.fillStyle = point.colour;
      context.globalAlpha = 0.5;
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();

      for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
        const other = points[otherIndex];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance > 118) continue;
        context.beginPath();
        context.globalAlpha = (1 - distance / 118) * 0.13;
        context.strokeStyle = "#86fff2";
        context.lineWidth = 0.65;
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.stroke();
      }
    }
    context.globalAlpha = 1;
    animationFrame = window.requestAnimationFrame(drawConstellation);
  }

  window.addEventListener("resize", resizeConstellation, { passive: true });
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  document.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
    } else {
      animationFrame = window.requestAnimationFrame(drawConstellation);
    }
  });

  resizeConstellation();
  drawConstellation();
})();
