document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriterText");
  const progressBar = document.getElementById("scrollProgress");

  const words = [
    "investigating",
    "analyzing",
    "examining",
    "preserving",
    "tracing",
    "reconstructing"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    if (!typewriter) return;

    const word = words[wordIndex];

    typewriter.textContent = deleting
      ? word.substring(0, charIndex--)
      : word.substring(0, charIndex++);

    let speed = deleting ? 45 : 75;

    if (!deleting && charIndex > word.length) {
      speed = 1100;
      deleting = true;
    }

    if (deleting && charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
      speed = 250;
    }

    setTimeout(typeEffect, speed);
  }

  function updateScrollProgress() {
    if (!progressBar) return;

    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;

    progressBar.style.width = progress + "%";
  }

  typeEffect();
  updateScrollProgress();

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
});