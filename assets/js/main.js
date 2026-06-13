const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("mousemove", (event) => {
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;
  document.body.appendChild(dot);
  window.setTimeout(() => dot.remove(), 700);
});
