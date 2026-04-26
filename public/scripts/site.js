const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

const syncHeader = () => {
  if (!header) {
    return;
  }

  if (window.scrollY > 24 || mobileMenu && !mobileMenu.hidden) {
    header.classList.add("is-solid");
  } else {
    header.classList.remove("is-solid");
  }
};

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) {
    syncHeader();
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
  document.body.classList.remove("no-scroll");
  syncHeader();
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    document.body.classList.toggle("no-scroll", !isOpen);
    syncHeader();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
