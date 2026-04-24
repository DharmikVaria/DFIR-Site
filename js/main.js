(function () {
  document.documentElement.classList.add("js-enabled");

  const yearTargets = document.querySelectorAll("[data-current-year]");
  yearTargets.forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });

  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    if (!link.rel.includes("noopener")) {
      link.rel = `${link.rel} noopener noreferrer`.trim();
    }
  });
})();
