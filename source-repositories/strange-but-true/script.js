const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const checkoutModal = document.querySelector("#checkout-modal");
const checkoutTitle = document.querySelector("#checkout-modal-title");
const checkoutPrice = document.querySelector("#checkout-price");
const checkoutDelivery = document.querySelector("#checkout-delivery");
const paymentLink = document.querySelector("#payment-link");
const agentModal = document.querySelector("#agent-modal");
const upsellCopy = document.querySelector("#upsell-copy");
const guideTitle = document.querySelector("[data-guide-title]");
const guideResponse = document.querySelector("[data-guide-response]");
const guideLink = document.querySelector("[data-guide-link]");

if (navLinks && !navLinks.querySelector('a[href="community-ledger.html"]')) {
  const ledgerLink = document.createElement("a");
  ledgerLink.href = "community-ledger.html";
  ledgerLink.textContent = "Ledger";

  const downloadsLink = navLinks.querySelector('a[href="downloads.html"]');
  if (downloadsLink) {
    downloadsLink.insertAdjacentElement("afterend", ledgerLink);
  } else {
    navLinks.appendChild(ledgerLink);
  }
}

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-checkout-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product") || "Selected download";
    const price = button.getAttribute("data-price") || "Price to be confirmed";
    const payment = button.getAttribute("data-payment") || "https://example.com/replace-with-payment-link";
    const delivery = button.getAttribute("data-delivery") || "Downloads are delivered after payment confirmation.";

    if (checkoutTitle) checkoutTitle.textContent = product;
    if (checkoutPrice) checkoutPrice.textContent = price;
    if (checkoutDelivery) checkoutDelivery.textContent = delivery;
    if (upsellCopy) {
      const supporterSelected = product.toLowerCase().includes("supporter");
      upsellCopy.textContent = supporterSelected
        ? "You are already choosing the supporter bundle. The useful next step is referral or custom help."
        : "If you are buying a single item, the supporter bundle may be better value once it is live.";
    }
    if (paymentLink) {
      const isPlaceholderPayment = payment.includes("example.com") || payment.includes("replace-with");
      const isFree = price.toLowerCase() === "free";
      paymentLink.href = isPlaceholderPayment ? "contact.html" : payment.startsWith("http") ? payment : payment;
      paymentLink.removeAttribute("target");
      paymentLink.removeAttribute("rel");

      if (!isPlaceholderPayment && payment.startsWith("http")) {
        paymentLink.setAttribute("target", "_blank");
        paymentLink.setAttribute("rel", "noopener noreferrer");
      }

      paymentLink.textContent = isFree ? "Get the free sample" : isPlaceholderPayment ? "Payment link coming soon" : "Pay by card";
    }

    if (checkoutModal instanceof HTMLDialogElement) {
      checkoutModal.showModal();
    }
  });
});

if (checkoutModal instanceof HTMLDialogElement) {
  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      checkoutModal.close();
    }
  });
}

document.querySelectorAll("[data-share]").forEach((button) => {
  button.addEventListener("click", async () => {
    const shareUrl = button.getAttribute("data-share-url") || window.location.href;
    const shareText = button.getAttribute("data-share-text") || "Strange but True: tech, art and ideas that'll actually help.";

    if (navigator.share) {
      try {
        await navigator.share({ title: "Strange but True", text: shareText, url: shareUrl });
      } catch {
        // The user cancelled the share sheet.
      }
      return;
    }

    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    button.textContent = "Link copied";
  });
});

document.querySelectorAll("[data-agent-open]").forEach((button) => {
  button.addEventListener("click", () => {
    if (agentModal instanceof HTMLDialogElement) {
      agentModal.showModal();
    }
  });
});

if (agentModal instanceof HTMLDialogElement) {
  agentModal.addEventListener("click", (event) => {
    if (event.target === agentModal) {
      agentModal.close();
    }
  });
}

const guideResponses = {
  tech: {
    title: "Start with a short enquiry.",
    response:
      "Tell Luke what you are trying to do, what device or tool is involved, and whether there is a deadline. Do not include passwords, one-time codes or private documents.",
    href: "contact.html#contact-form-title",
    label: "Send a question",
  },
  meeting: {
    title: "Ask for a time in the contact form.",
    response:
      "Use the contact form and choose Request a time to talk. Add a preferred date or time window if you already know one.",
    href: "contact.html#contact-form-title",
    label: "Open contact form",
  },
  downloads: {
    title: "Browse samples and bundles.",
    response:
      "Start with the free sampler, music catalogue or writing bundles. Paid download links are placeholders until the checkout provider is connected.",
    href: "downloads.html",
    label: "Open downloads",
  },
  events: {
    title: "Share the date, place and gear.",
    response:
      "For projector, sound, outdoor cinema or local event support, send the event date, location, rough audience size and what equipment you already have.",
    href: "contact.html#contact-form-title",
    label: "Ask about an event",
  },
  feedback: {
    title: "Leave a tiny field report.",
    response:
      "If Strange but True helped, say what got easier and what could be smoother next time. Short, honest notes are useful.",
    href: "feedback.html",
    label: "Leave feedback",
  },
};

document.querySelectorAll("[data-guide-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-guide-choice") || "tech";
    const item = guideResponses[key] || guideResponses.tech;

    document.querySelectorAll("[data-guide-choice]").forEach((choice) => {
      choice.classList.toggle("is-active", choice === button);
    });

    if (guideTitle) guideTitle.textContent = item.title;
    if (guideResponse) guideResponse.textContent = item.response;
    if (guideLink) {
      guideLink.href = item.href;
      guideLink.textContent = item.label;
    }
  });
});

const topButton = document.querySelector("[data-to-top]");

if (topButton) {
  const updateTopButton = () => {
    topButton.classList.toggle("is-visible", window.scrollY > 560);
  };

  updateTopButton();
  window.addEventListener("scroll", updateTopButton, { passive: true });
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll("[data-sample-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const showcase = button.closest("[data-sample-showcase]");
    if (!showcase) return;
    const animated = showcase.classList.toggle("is-animated");
    button.setAttribute("aria-pressed", String(animated));
    button.textContent = animated ? "Animated glow" : "Calm view";
  });
});
