(function () {
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  function closeMobileNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function setActiveLink() {
    if (!navLinks) return;
    const currentPath = window.location.pathname;
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
      const linkPath = new URL(link.href).pathname;
      const isHome = currentPath === "/" && linkPath === "/";
      const isMatch = currentPath !== "/" && linkPath !== "/" && currentPath === linkPath;
      link.classList.toggle("is-active", isHome || isMatch);
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileNav();
    });
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMobileNav();
  });

  updateHeaderState();
  setActiveLink();
})();
